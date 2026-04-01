//sistema de acesso a balada

// como seria se fosse console ao inves de terminal
//idade = prompt('Qual a sua idade');

export function idadeValidade(idade) {
    
    if (idade <= 0) {
        return ('Insira uma idade valida');

    } else if (idade < 18) {
        return ('Você não tem premissão de entrar');

    } else {
        return ('Bem vindo, aproveite!');

    }
}