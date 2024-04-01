import React, { ReactNode, useState } from 'react';
import { IActivity } from '../common/Interfaces';
import { post } from '../../utils/api';
import { notifyOnFailure, notifyOnSuccess } from '../../utils/common/notifications';
import { Toaster } from 'react-hot-toast';
import { Loader } from '../common/Loader';


export interface ModuleProps {
    module: IActivity
}

export function ModuleItem({ module }: ModuleProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const renderLoader = (): ReactNode => {
        return (
            <>
                <Loader />
            </>
        );
    };
    const handleDoTask = async (e: any) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const activityRequest = { activity_id: module.id };
            const response = await post('http://localhost:8000/api/activity/log', activityRequest);
            if (response) {
                notifyOnSuccess('Task was completed successfully!');
                setIsLoading(false);
            } else {
                setIsLoading(false);
                notifyOnFailure('There was an error submitting the prompt.Please try again!');
            }
        } catch (err) {
            console.log(err);
            setIsLoading(false);
            notifyOnFailure('There was an error submitting the prompt.Please try again!');
        }
    };

    return (
        <>
            <article className="overflow-hidden rounded-lg border border-gray-100 shadow-sm pb-12">
                <Toaster toastOptions={{
                    duration: 5000,
                    // Default options for specific types
                    success: {
                        duration: 3000,
                    },
                }} />
                {isLoading ? renderLoader() : null}
                <div className="p-4 sm:p-6">
                    <time dateTime="2022-10-10" className="block text-xs text-gray-500">
                        {module.created_at}
                    </time>
                    <a href="#">
                        <h3 className="text-lg font-medium text-gray-900">
                            {module.name}
                        </h3>
                    </a>

                    <div className="mr-3 mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                        <p className="no-tailwindcss-base"
                            dangerouslySetInnerHTML={{ __html: module?.description ? module?.description : '' }}
                        />
                    </div>

                    <a
                        href="#"
                        onClick={handleDoTask}
                        className="mr-3 group mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600"
                    >
                        Do Task

                        <span
                            aria-hidden="true"
                            className="block transition group-hover:translate-x-0.5"
                        >
                            &rarr;
                        </span>
                    </a>
                </div>
            </article>
        </>
    );
}
