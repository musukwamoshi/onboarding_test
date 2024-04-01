import React, { ReactNode, useState } from 'react';
import { get } from '../../utils/api';
import { useEffectOnce } from '../../utils/hooks/useEffectOnce';
import { WithSideNav } from '../navigation/WithSideNav';
import { ModuleItem } from './ModuleItem';
import { IActivity } from '../common/Interfaces';

export function TrainingModules() {
    const [modules, setModules] = useState<Array<IActivity>>([]);

    const fetchTrainingModules = async (): Promise<any> => {
        const response = await get('http://localhost:8000/api/modules', {});
        setModules(response);
    };

    useEffectOnce(() => {
        fetchTrainingModules();
    });

    const renderModules = (): ReactNode => {
        return (
            <>
                {modules.map((module: any) => {
                    return (
                        <ModuleItem key={module.id} module={module} />
                    );
                })}
            </>
        );
    };

    const renderDefault = (): ReactNode => {
        return (
            <>
                <p>There are currently no training modules posted.</p>
            </>
        );
    };


    const renderTrainingModules = (): ReactNode => {
        return (
            <>
                <div className="max-w-7xl mx-auto px-10 sm:px-6 md:px-6">
                    <h2 className="text-2xl px-6 sm:px-6 md:px-10 font-bold sm:text-3xl">
                        Training Modules
                    </h2>
                </div>
                <div className="max-w-7xl mx-auto px-10 sm:px-6 md:px-10">
                    {modules.length > 0 ? renderModules() : renderDefault()}
                </div>
            </>
        );
    };
    return <WithSideNav>{renderTrainingModules()}</WithSideNav>;
}

