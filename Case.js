//seria assim se eu estivesse usando o console ao inves do terminal
    //let dia = prompt("Qual é a casa desse número nos dias da semana (de 1 a 7)");

    export function caso(dia){

        if (isNaN(dia)) {
            return ("Por favor, digite apenas números.");
            
        }
switch(String(dia)) {
    case '1': return ('primeiro dia da semana é o Domingo')

    case '2': return ('Segundo dia da semana é a Segunda-feira')

    case '3': return ('Terceiro dia da semana é a Terça-feira')

    case '4': return ('Quarto dia da semana é a Quarta-feira')

    case '5': return ('Quinto dia da semana é a Quinta-feira')

    case '6': return ('Sexto dia da semana é a Sexta-feira')

    case '7': return ('Sétimo e último dia da semana é o Sabado')

    default: return ('a semana so tem 7 dias e dia 0 não existe')
}
}