import express from 'express';

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

const app = express(); //Criação do server
const PORT = 3000; //Chave que chma o server

// 2. ROTA DE ARITMÉTICA (Exemplo com todos os cálculos de uma vez)
// Acesse: http://localhost:3000/calculos
app.get('/calculos', (_, res) => {

        res.json(`
            <h1>Painel Aritmético</h1>
            <p>Soma de 81 e 12: ${AritmeticaAdd(81, 12)}</p>
            <p>Subtração de 126 e 53: ${AritmeticaSub(126, 53)}</p>
            <p>Divisão de 120 por 20: ${AritmeticaDiv(120, 20)}</p>
            <p>Multiplicação de 5 e 16: ${AritmeticaMulti(5, 16)}</p>
            <p>Potência 4 elevado a 6: ${AritmeticaPot(4, 6)}</p> 
            <p>Raiz de 144: ${AritmeticaRaiz(144)}</p>
            <p>Fração 12/5: ${AritmeticaFrac(12, 5)}</p>
            <p>Valor da porcentagem 20% de 129: ${AritmeticaVPorc(129, 20)}</p>
            <p>Equivalencia do valor 23 de 263: ${AritmeticaEqui(23, 263)}%</p>
        `);
});

// 3. ROTA DE DIA DA SEMANA (Case)
// Acesse: http://localhost:3000/dia/1
app.get('/dia/:valor', (req, res) => {
    res.send(`<h2>Resultado: ${caso(req.params.valor)}</h2>`);
});

// 4. ROTA DE COMIDA (DoWhile)
// Acesse: http://localhost:3000/comida?escolha=Pizza
app.get('/comida', (req, res) => {
    res.send(`<h3>${verificarComida(req.query.escolha)}</h3>`);
});

// 5. ROTA DE TABUADA (For)
// Acesse: http://localhost:3000/tabuada/7
app.get('/tabuada/:num', (req, res) => {
    res.send(`<h2>Tabuada do ${req.params.num}</h2>${tabuada(req.params.num)}`);
});

// 6. ROTA DE IDADE (IfElse)
// Acesse: http://localhost:3000/idade?v=20
app.get('/idade', (req, res) => {
    res.send(`<h1>Status: ${idadeValidade(Number(req.query.v))}</h1>`);
});

// 7. ROTA DE SAUDAÇÃO (String)
// Acesse: http://localhost:3000/ola/SeuNome
app.get('/ola/:nome', (req, res) => {
    res.send(`<h1>${textos(req.params.nome)}</h1>`);
});

// 8. ROTA DE SALÁRIOS (Vetor)
// Acesse: http://localhost:3000/salarios?lista=1200,3500,5000
app.get('/salarios', (req, res) => {
    const listaStr = req.query.lista;
    //Eu agraço ao gemini nessa parte, sozinho na fazia nunca
    if (!listaStr) return res.send("Use ?lista=valor1,valor2");
    const numeros = listaStr.split(',').map(Number);
    res.send(`<h3>Salários Líquidos: ${calcularSalarios(numeros).join(' | R$ ')}</h3>`);
});

// 9. ROTA DE ADIVINHAÇÃO (While)
// Acesse: http://localhost:3000/chute/5
app.get('/chute/:num', (req, res) => {
    res.send(`<h1>${adivinhar(req.params.num)}</h1>`);
});

app.listen(PORT, () => {
    console.log(`\nSERVIDOR ONLINE: http://localhost:${PORT}`);
    console.log(`\n--- LINKS PARA TESTAR ---`);
    console.log(`Soma:      http://localhost:${PORT}/calculos`);
    console.log(`Case:      http://localhost:${PORT}/dia/1`);
    console.log(`Do Whille  http://localhost:${PORT}/comida?escolha=Pizza`);
    console.log(`For        http://localhost:${PORT}/tabuada/7`);
    console.log(`If Else    http://localhost:${PORT}/idade?v=20`);
    console.log(`String     http://localhost:${PORT}/ola/SeuNome`);
    console.log(`Vetor      http://localhost:${PORT}/salarios?lista=1200,3500,5000`);
    console.log(`Whille     http://localhost:${PORT}/chute/5`);
});

//app.get: quando o server for chamado por tal nome (app.get('/chute/:num') o que tiver dentro é executado
//app.listen: quando o server for chamado por tal nome (app.listen(PORT) o que tiver dentro sera executado
// res e req: req->o que a  pessoa inceriu na url res->O que a pessoa recebeu de volta no site