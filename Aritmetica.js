//Operações Aritméticas

//Adição
export function AritmeticaAdd(vari, varei){
    let adicao = (vari+varei) 
    return adicao
}

//Subtração
export function AritmeticaSub(subi, subei){
    let subtracao = (subi-subei) 
    return subtracao
}

//divisão
export function AritmeticaDiv(divi, divid){
    let divisao = (divi/divid) 
    return divisao
}


//multiplicação
export function AritmeticaMulti(multi, multip){
    let multiplicacao = (multi*multip) 
    return multiplicacao
}

//Potência
export function AritmeticaPot(pot, base){
    let potencia = (Math.pow(pot, base)) 
    return potencia
}

//Raiz
export function AritmeticaRaiz(raza){
    let raiz = Math.sqrt(raza)
    return raiz
}

//Fração 
export function AritmeticaFrac(nume, deno){
    let Fracao = (nume/deno) 
    return Fracao
}

//Porcentagem

//Valor da porcentagem
export function AritmeticaVPorc(vBase, porcent){
    let ValorPorcentagem = ((vBase/100)*porcent) 
    return ValorPorcentagem
}

//Equivalencia de valor
export function AritmeticaEqui(parte, total){
    let EquivalenciaValor = ((parte/total)*100) 
    return EquivalenciaValor
}

//logaritimo
let loga1 = Math.log(10);
let loga2 = Math.log10(10);
let loga3 = Math.log1p(10);
let loga4 = Math.log2(10);
let loga5 = Math.LOG10E;
let loga6 = Math.LN2;