import React, { ReactNode, useState } from 'react';
import { get } from '../../utils/api';
import { useEffectOnce } from '../../utils/hooks/useEffectOnce';
import { ScoreItem } from './ScoreItem';
import { WithSideNav } from '../navigation/WithSideNav';
import { IUserActivityLog } from '../common/Interfaces';

export function LeaderBoard() {
    const [scores, setScores] = useState<Array<IUserActivityLog>>([]);

    const fetchScores = async (): Promise<any> => {
        const response = await get('http://localhost:8000/api/scores');
        setScores(response);
    };

    useEffectOnce(() => {
        fetchScores();
    });

    const renderScoreItems = (): ReactNode => {
        return (
            <>
                {scores.map((score: any) => {
                    return (
                        <ScoreItem key={score.id} score={score} />
                    );
                })}
            </>
        );
    };

    const renderDefault = (): ReactNode => {
        return (
            <>
                <p>There are currently no scores.</p>
            </>
        );
    };


    const renderScores = (): ReactNode => {
        return (
            <>
                <div className="max-w-7xl mx-auto px-10 sm:px-6 md:px-6">
                    <p className="text-center text-2xl px-6 sm:px-6 md:px-10 font-bold sm:text-2xl">
                        Scores
                    </p>
                </div>
                <div className="max-w-7xl mx-auto px-10 rounded-lg border border-gray-200">
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead className="ltr:text-left rtl:text-right">
                            <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">Employee</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">Task</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">Score</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">{scores.length > 0 ? renderScoreItems() : renderDefault()}</tbody>
                    </table>
                </div>
            </>
        );
    };
    return <WithSideNav>{renderScores()}</WithSideNav>;
}

