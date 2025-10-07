export default function getFlagEmoji(countryCode: string) {

    const specialFlags: Record<string, string> = {
        'GB-ENG': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
        'GB-SCT': '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
        'GB-WLS': '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
    };

    // Return special flags directly if they exist
    if (specialFlags[countryCode.toUpperCase()]) {
        return specialFlags[countryCode.toUpperCase()];
    }

    return [...countryCode.toUpperCase()].map(char =>
        String.fromCodePoint(127397 + char.charCodeAt(0))
    ).reduce((a, b) => `${a}${b}`);
}