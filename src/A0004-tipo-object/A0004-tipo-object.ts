const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  // ! Não é boa prática
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};
// Mesmo acusando o erro, foi possível reatribuir (???)
// objetoA.chaveA = 'teste';
objetoA.chaveB = 'Outro valor';
objetoA.chaveC = 'Novo valor';
objetoA.chaveD = 'Nova chave';

console.log(objetoA);

// Module mode
export default 1;
