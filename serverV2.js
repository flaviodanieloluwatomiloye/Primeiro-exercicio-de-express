//Pra ser sincero, não sei direito o que fiz mas tá funcionado, vou estudar mais JSON, muito chato mas bem organizado

import express from 'express';
import { 
    AritmeticaAdd, AritmeticaSub, AritmeticaDiv, 
    AritmeticaMulti, AritmeticaPot, AritmeticaRaiz, 
    AritmeticaFrac, AritmeticaVPorc, AritmeticaEqui 
} from './Aritmetica.js'
import { caso } from './Case.js'
import { verificarComida } from './DoWhile.js'
import { tabuada } from './For.js'
import { idadeValidade } from './IfElse.js'
import { textos } from './String.js'
import { adivinhar } from './Whille.js'
import { calcularSalarios } from './Vetor.js'

const app = express()
const PORT = 3000

// Middleware para aceitar JSON no corpo das requisições
//Middleware é um software "intermediário" que conecta componentes, aplicativos ou sistemas distribuídos, facilitando a troca de dados e a comunicação
app.use(express.json())

// 1. ROTA DE ARITMÉTICA
app.get('/calculos', (_, res) => {

    res.json({
        titulo: "Aritmético",
        resultados: {
            soma: AritmeticaAdd(81, 12),
            subtracao: AritmeticaSub(126, 53),
            divisao: AritmeticaDiv(120, 20),
            multiplicacao: AritmeticaMulti(5, 16),
            potencia: AritmeticaPot(4, 6),
            raiz: AritmeticaRaiz(144),
            fracao: AritmeticaFrac(12, 5),
            porcentagem: AritmeticaVPorc(129, 20),
            equivalencia: `${AritmeticaEqui(23, 263)}%`
        }
    })
})

// 2. ROTA DE DIA DA SEMANA (Case)
app.get('/dia/:valor', (req, res) => {
    res.json({
        Entrada: req.params.valor,
        Resultado: caso(req.params.valor)
    })
})

// 3. ROTA DE SALÁRIOS (Vetor)
app.get('/salarios', (req, res) => {
    const listaStr = req.query.lista;
    if (!listaStr) {
        return res.status(400).json({ erro: "Parâmetro 'lista' é obrigatório. Ex: ?lista=1000,2000" });
    }
    
    const numeros = listaStr.split(',').map(Number)
    const resultados = calcularSalarios(numeros)

    res.json({
        SalariosBrutos: numeros,
        SalariosLiquidos: resultados,
        TotalProcessado: resultados.length
    })
})

// 4. ROTA DE COMIDA (DoWhile)
app.get('/comida', (req, res) => {
    const escolha = req.query.escolha;
    res.json({
        ItemEscolhido: escolha || "Nenhum",
        MensagemSistema: verificarComida(escolha)
    })
})

// 5. ROTA DE TABUADA (For)
app.get('/tabuada/:num', (req, res) => {
    const numero = req.params.num;
    res.json({
        TabuadaDo: numero,
        ResultadoFormatado: tabuada(numero)
    })
})

// 6. ROTA DE IDADE (IfElse)
app.get('/idade', (req, res) => {
    const valorIdade = Number(req.query.v);
    
    if (isNaN(valorIdade)) {
        return res.status(400).json({ erro: "Por favor, informe um número válido em ?v=" });
    }

    res.json({
        IdadeDigitada: valorIdade,
        ResultadoValidacao: idadeValidade(valorIdade)
    })
})

// 7. ROTA DE SAUDAÇÃO (String)
app.get('/ola/:nome', (req, res) => {
    res.json({
        Usuario: req.params.nome,
        Introducao: textos(req.params.nome)
    })
})

// 8. ROTA DE ADIVINHAÇÃO (Whille)
app.get('/chute/:rand', (req, res) => {
    const palpite = req.params.rand;

    res.json({
        jogo: "Adivinhação",
        PalpiteUsuario: palpite,
        ResultadoSistema: adivinhar(palpite)
    })
})


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


// --- EXPLICAÇÃO: req.params (Parâmetros de Rota) ---
// Use quando o dado faz parte do "endereço" fixo da página.
// Identificado pelo ":" na rota. Ex: /tabuada/:num

// --- EXPLICAÇÃO: req.query (Query Strings / Consulta) ---
// Use para dados opcionais, filtros ou listas que vêm após o "?"
// Não precisa de ":" na definição da rota.

//7 horas de conversao de JS para JSON, tenho que programar mais rapido, gastando muito tempo