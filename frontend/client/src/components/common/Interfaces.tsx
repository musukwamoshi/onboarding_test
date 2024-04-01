/* eslint-disable camelcase */
export interface IUserActivityLog {
    id: number
    score: number,
    created_at: string,
    started_at: string,
    ended_at: string,
    user_activity: IUserActivity
}

export interface IUserActivity {
    id: number,
    completed: boolean,
    created_at: string,
    updated_at: string,
    activity: IActivity,
    user: IUser
}


export interface IActivity {
    id: number,
    name: string,
    description: string,
    start_date: string,
    end_date: string,
    is_active: boolean,
    created_at: string,
    updated_at: string,
}

export interface IUser {
    id: number,
    username: boolean,
    created_at: string,
    updated_at: string,
}
