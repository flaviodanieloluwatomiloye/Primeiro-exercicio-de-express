
//Adivinha o numero
let numSecreto = 26;

export function adivinhar(tenta) {

    if (parseInt(tenta) === numSecreto) {
        return "Aeeeee!! Acertou!!";
    } else{
        return "Tente novamente.";
    }
}