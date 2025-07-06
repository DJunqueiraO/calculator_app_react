export function CalculateSum(extract: [string, string | null][]): number {
    let result = 0;

    for (const [a, b] of extract) {
        const valorToAdd = eval(a.replace(',', '.'));
        const currentResult = result + valorToAdd;

        let sentence = `${(result).toFixed(2).padStart(10)}`;
        sentence += `\t+\t${(valorToAdd).toFixed(2).padStart(5)}`;
        sentence += `\t; = ${(currentResult).toFixed(2).padStart(10)}`;
        sentence += ` ->\t*${a}\t${b}*`;

        console.log(sentence);

        result = currentResult;
    }

    return result;
}