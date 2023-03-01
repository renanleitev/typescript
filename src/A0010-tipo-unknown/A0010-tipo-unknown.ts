let x: unknown;

x = 100;
x = 'Luiz';
x = 900;
x = 10;
const y = 800;

// A vantagem do unknow é que ele força uma
// checagem antes de executar (Ex: condicional)
if (typeof x === 'number') console.log(x + y);

// Sem checar, dá erro
// console.log(x - y);

// Module mode
export default 1;
