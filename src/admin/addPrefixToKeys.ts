export const addPrefixToKeys = (obj: Record<string, any>, prefix: string): Record<string, any> => {
    const result: Record<string, any> = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = `${prefix}${key}`;
            if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
                result[newKey] = addPrefixToKeys(obj[key], prefix);
            } else {
                result[newKey] = obj[key];
            }
        }
    }
    return result;
};
