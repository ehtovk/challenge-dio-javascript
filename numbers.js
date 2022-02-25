/* function comparadorNumeros(n1, n2) {
    const igualdade = n1 === n2;
    const soma = n1 = n2;

    return igualdade ? "São iguais" : "Não são iguais";
    
   /* if (igualdade) {
        return "São iguais";
    }

    return "Não são iguais"; */
// }

function comparadorDeNumeros(n1, n2) {
    const primeiraFrase = firstPhrase(n1, n2);
    const segundaFrase = secondPhrase(n1, n2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function firstPhrase(n1, n2) {
    let equals = '';

    if (n1 !== n2) {
        equals = "não";
    }

    return `Os números ${n1} e ${n2} ${equals} são iguais.`;
}

function secondPhrase(n1, n2) {
    const soma = n1 + n2;

    let result10 = 'menor';
    let result20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        result10 = 'maior';
    }

    if (compara20) {
        result20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${result10} que 10 e ${result20} que 20. `;

}

console.log(comparadorDeNumeros(5, 2));

