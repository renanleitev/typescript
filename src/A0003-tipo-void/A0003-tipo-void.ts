// void = Não retorna nada
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa: {
  nome: string;
  sobrenome: string;
  exibirNome(): void;
} = {
  nome: 'Luiz',
  sobrenome: 'Otávio',

  exibirNome() {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Luiz', 'Otávio');
pessoa.exibirNome();

export { pessoa };
