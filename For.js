//Tabuada basica

export function tabuada(tabu) {
    let resultados = [];
    for(let i = 1; i <= 12; i++) {
        resultados.push(`${tabu} x ${i} = ${tabu * i}`);
    }
    return resultados; 
}
//Foi mal professor, tava sem criatividade hoje
