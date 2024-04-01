import { useEffect } from 'react';

export const useEffectOnce = (hook: () => void): void => useEffect(hook, []);
