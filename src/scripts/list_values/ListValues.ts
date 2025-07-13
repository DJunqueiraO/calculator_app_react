export function ListValues(values: string): [string, string | null][] {
    function onMap(x: string): [string, string | null] {
        const parts = x.split(';');
        const first = parts[0].replace(/[\s\t]/g, ' ')
        const second = parts.length > 1 ? parts[1].replace(/ /g, ' ') : null;
        return [first, second];
    }

    return values
        .split('\n')
        .map(onMap)
        .filter(([x]) => x !== '')
}