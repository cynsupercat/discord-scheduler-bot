export function tryParse(val: string): number | null {
    const number = +val;

    if (isNaN(number))
        return null;

    return number;
}