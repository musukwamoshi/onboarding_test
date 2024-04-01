import React from 'react';
import { IUserActivityLog } from '../common/Interfaces';

export interface ResponseProps {
    score: IUserActivityLog
}

export function ScoreItem({ score }: ResponseProps) {
    return (
        <>
            <tr>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center"> {score.user_activity.user.username}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center"> {score.user_activity.activity.name}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{score.score}</td>
            </tr>
        </>
    );
}
