// enum = Mostra o dado com base no valor atribuído
// É possível dividir o enum em várias partes
// enum padrão = funciona como índice de um array
enum Cores {
  BRANCO, // 0
  PRETO, // 1
  CINZA, // 2
}
// enum com valores customizados
enum Cores {
  VERMELHO = 10, // 10
  AZUL = 100, // 100
  AMARELO = 200, // 200
}

const nome: string = 'joao';

const

// É possível declarar um dado sem um valor
enum Cores {
  ROXO = 'PURPLE',
  VERDE = 201,
  ROSA,
}
// Definindo uma função para exibir o enum
export function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}
// É possível acessar o dado pelo valor atribuído
escolhaCor(0); // BRANCO
// Se não houver dado correspondente, o valor se torna undefined
escolhaCor(99); // undefined
// É possível acessar o dado como se fosse um objeto
console.log(Cores.ROXO); // ROXO
