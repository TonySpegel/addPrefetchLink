export {};

declare global {
    interface NetworkInformation {
        saveData: boolean;
        effectiveType: 'slow-2g' | '2g' | '3g' | '4g'
    }
}