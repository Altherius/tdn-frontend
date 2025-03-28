export default function getFlagEmoji(countryCode: string) {
    return [...countryCode.toUpperCase()].map(char =>
        String.fromCodePoint(127397 + char.charCodeAt())
    ).reduce((a, b) => `${a}${b}`);
}