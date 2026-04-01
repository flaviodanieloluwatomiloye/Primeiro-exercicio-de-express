//pizza ou hamburger

// DoWhile.js
export function verificarComida(escolha) {
    let mensagem = "";
    let valida = false;

    do {
        // O código entra aqui pelo menos UMA vez
        if (escolha === 'Hamburguer' || escolha === 'Pizza') {
            valida = true; // Sai do loop se for válido
            if (escolha === 'Hamburguer') {
                mensagem = "Péssima escolha, tente novamente!";
            } else {
                mensagem = "Ótima escolha, não tinha outra melhor!";
            }
        } else {
            // Se não for válido, prepara a mensagem e sai (em web, o loop não pode travar a tela)
            mensagem = "Erro: Digite exatamente 'Hamburguer' ou 'Pizza' (respeite as maiúsculas).";
            valida = true; // Forçamos a saída para não travar o navegador
        }

    } while (!valida);

    return mensagem;
}