import readline from 'readline-sync';

import { 
    AritmeticaAdd, AritmeticaSub, AritmeticaDiv, 
    AritmeticaMulti, AritmeticaPot, AritmeticaRaiz, 
    AritmeticaFrac, AritmeticaVPorc, AritmeticaEqui 
} from './Aritmetica.js';
import { caso } from './Case.js';
import { verificarComida } from './DoWhile.js';
import { tabuada } from './For.js';
import { idadeValidade } from './IfElse.js';
import { textos } from './String.js';
import { adivinhar } from './Whille.js'; 
import { calcularSalarios } from './Vetor.js';

function exibirMenu() {
    while (true) { 
        console.clear(); 
        console.log("\n=== SISTEMA DE TESTES (CONSOLE) ===");
        console.log("1. Aritmética | 2. Dia (Case) | 3. Comida (DoWhile)");
        console.log("4. Tabuada | 5. Idade | 6. Saudação | 7. Variáveis");
        console.log("8. Salários | 9. Adivinhação | 0. Sair");
        
        const opcao = readline.question("\nEscolha uma opcao: ");

        switch (opcao) {
            case '1':
                console.log(`soma 81+12: ${AritmeticaAdd(81, 12)}`)
                console.log(`subtracao 126-53: ${AritmeticaSub(126, 53)}`)
                console.log(`divisao 120/20: ${AritmeticaDiv(120, 20)}`)
                console.log(`multiplicacao 5*16: ${AritmeticaMulti(5, 16)}`)
                console.log(`potencia de 4 elevado a 6: ${AritmeticaPot(4, 6)}`)
                console.log(`raiz quadrada de 12: ${AritmeticaRaiz(144)}`)
                console.log(`fracao 12/5: ${AritmeticaFrac(12, 5)}`)
                console.log(`porcentagem 20% de 129: ${AritmeticaVPorc(129, 20)}`)
                console.log(`equivalencia 23 de 263 em %: ${AritmeticaEqui(23, 263)}%`)
                    break;
            case '2':
                const dia = readline.question("Digite o numero do dia (1-7): ");
                console.log(caso(dia));
                break;
            case '3':
                const comida = readline.question("Hamburguer ou Pizza? ");
                console.log(verificarComida(comida));
                break;
            case '4':
                const numTabu = readline.questionInt("Tabuada de qual numero? ");
                console.log(tabuada(numTabu).replace(/<br>/g, '\n'));
                break;
            case '5':
                const idade = readline.questionInt("Sua idade: ");
                console.log(idadeValidade(idade));
                break;
            case '6':
                const nome = readline.question("Seu nome: ");
                console.log(textos(nome));
                break;
            case '7':
                console.log(`Int: ${num}`);
                console.log(`Double: ${num2}`);
                console.log(`String: ${str}`);
                console.log(`Boolean: ${bul}`);
                break; 
            case '8':
                const saca = readline.question("Digite salarios separados por virgula: ");
                const lista = saca.split(',').map(Number);
                console.log("Líquidos: R$ " + calcularSalarios(lista).join(' | R$ '));
                break;
            case '9':
                const chute = readline.question("Chute um numero: ");
                console.log(adivinhar(chute));
                break;
            case '0':
                console.log("Saindo...");
                process.exit();
            default:
                console.log("Opção inválida!");
        }
        //faz um laço do codigo se não for caso "0"
        readline.keyInPause(); 
    }
}

exibirMenu();

//fiquei muito tempo procurando o erro e vi que não tinha importado o readline 🥲