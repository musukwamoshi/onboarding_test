//-------------------------------------------------------------------------------------------------

export const getRootUrl = (): string =>
    process.env.ROOT_URL || `https://${process.env.HEROKU_APP_NAME}.herokuapp.com`;

//-------------------------------------------------------------------------------------------------

const trueEnv = ["true", "t", "yes", "on", "1"];
const falseEnv = ["false", "f", "no", "off", "0"];

export function boolEnv(
    value: string | null | undefined,
    defaultValue: boolean = false
): boolean {
    if (isTrueEnv(value)) {
        return true;
    } else if (isFalseEnv(value)) {
        return false;
    } else {
        return defaultValue;
    }
}

export function isTrueEnv(value: string | null | undefined): boolean {
    if (!value) {
        return false;
    }
    return trueEnv.includes(value.toLowerCase().trim());
}

export function isFalseEnv(value: string | null | undefined): boolean {
    if (!value) {
        return false;
    }
    return falseEnv.includes(value.toLowerCase().trim());
}

//-------------------------------------------------------------------------------------------------
