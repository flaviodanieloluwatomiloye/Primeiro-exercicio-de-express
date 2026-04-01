export function calcularSalarios(listaBruta) {
    // O .map é usado para criar um novo vetor (array)
    let listsalario = listaBruta.map(salario => {
        let desconto = 0;
        if (salario < 2000.0) {
            desconto = salario * 0.085;
        } else {
            desconto = salario * 0.11;
        }
        return (salario - desconto).toFixed(2);
    });

    return listsalario;
}