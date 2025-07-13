export function CalculateSum(extract: [string, string | null][]): [number, string] {
    let result = 0;
    let extracted = ''

    for (const [a, b] of extract) {
        const valorToAdd = eval(a.replace(',', '.'));
        const currentResult = result + valorToAdd;

        let sentence = `${(result).toFixed(2).padStart(7)}`;
        sentence += ` + ${(valorToAdd).toFixed(2).padStart(7)}`;
        sentence += ` ; = ${(currentResult).toFixed(2).padStart(7)}`;
        sentence += ` -> *${a} ;${b || ''}*`;

        extracted += sentence + '\n';
        result = currentResult;
    }

    return [result, extracted];
}