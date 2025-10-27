// 1. Definição da Classe Atleta
class Atleta {
    // O construtor é usado para inicializar o nome e as notas de cada atleta
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }

    // Método para calcular a média válida (excluindo a maior e a menor nota)
    calcularMediaValida() {
        // Cria uma cópia das notas para ordenação
        let notasOrdenadas = [...this.notas].sort((a, b) => a - b);
        
        // Seleciona as 3 notas do meio
        let notasComputadas = notasOrdenadas.slice(1, 4);
        
        // Soma as notas usando o método reduce (mais moderno que forEach para somas)
        let soma = notasComputadas.reduce((acumulador, nota) => acumulador + nota, 0);
        
        // Retorna a média
        return soma / notasComputadas.length;
    }

    // Método para exibir o resultado formatado
    exibirResultado() {
        const mediaValida = this.calcularMediaValida();
        
        console.log(`Atleta: ${this.nome}`);
        
        // Exibe as notas originais (não ordenadas)
        console.log(`Notas Obtidas: ${this.notas.join(',')}`);
        
        // Formata a média para 6 casas decimais e substitui o ponto pela vírgula
        console.log(`Média Válida: ${mediaValida.toFixed(6).replace('.', ',')}`);
        console.log('');
    }
}

// Matriz de dados de entrada
let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }];

// 2. Processamento dos dados: 
// a) Mapeia (transforma) a matriz de objetos literais em uma matriz de instâncias da classe Atleta.
let atletasProcessados = atletas.map(atleta => {
    // O 'new Atleta()' chama o construtor da classe
    return new Atleta(atleta.nome, atleta.notas);
});

// b) Itera sobre as instâncias e chama o método de exibição.
atletasProcessados.forEach(atleta => {
    atleta.exibirResultado();
});