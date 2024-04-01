import toast from 'react-hot-toast';

export const notifyOnSuccess = (message: string) => toast.success(`${message}`);
export const notifyOnFailure = (error: string) => toast.error(`${error}`);
