import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LeaderBoard } from '../core/Leaderboard';
import { TrainingModules } from '../core/TrainingModules';


function AppRoutes() {
    return (
        <div>

            <Routes>
                <Route path="/" element={<LeaderBoard />} />
                <Route path="/modules" element={<TrainingModules />} />
                <Route path="/scores" element={<LeaderBoard />} />
            </Routes>

        </div>
    );
}

export default AppRoutes;
