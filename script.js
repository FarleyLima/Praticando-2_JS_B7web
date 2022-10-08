// exemplo de como criar uma função
function gravidade() {
  console.log('A gravidade é:');
  console.log(90.9);
}

// usando a função

gravidade();

// exemplo 2

function somar(n1, n2) {
  let resultado = n1 + n2;
  console.log('resultado é: ' + resultado);
}
somar(100, 25);

// sxemplo 3 

function nomeCompleto(nome, sobrenome) {
  let juncao = nome + sobrenome;
  console.log('O nome é: ' + juncao);
}

nomeCompleto("Farley", " Lima")

// retorno da função. ENTRADA -> PROCESSAMENTO -> SAÍDA

function nomeCarro(car1, car2) {
  return `${car1} ${car2}`;
}

let completo = nomeCarro("Gol", " Bola");
console.log("Nome do carro é :" + completo );

// função com RETORNO CONDICIOMAL

function maiorIdade(idade) {
  if(idade >= 18) {
    return true;
  } else {
    return false;
  }
}

let idade = 15;
let verificacao = maiorIdade(idade);

if (verificacao) {
  console.log("É maior de idade")
} else {
  console.log("É menor de idade")
}

// exemplo 2

function salarioMinimo(valor) {
  if(valor >= 1212) {
    return true;
  } else {
    return false;
  }
}

let valor = 300;
let consulta = salarioMinimo(valor);

if (consulta) {
  console.log("Valor superior ao salário mínimo");
} else {
  console.log("Valor é menor que um salário mínimo");
}

// EXERCÍCIO 4 MODULO 2 VÍDEO #7

function calcPct(num1, num2) {
  return (num2 / num1) * 100;
}


let x = 200;
let y = 36;
let pct = calcPct(x, y);
console.log(`${pct} é a % da divisão entre ${x} por ${y}`);


// EXERCÍCIO 5 MODULO 2 VÍDEO #8

function valorImovel(metragem, quartos) {
  let m2 = 3000;
  let preco = 0;

  switch (quartos) {
    case 1:
      default:
        preco = metragem * m2;
        break;
      case 2:
        preco = metragem * (m2 * 1.2);
        break;
      case 3: 
        preco = metragem * (m2 * 1.5);
        break;    
  }

  return preco;
}

let metragem = 250;
let quartos = 3;
let preco = valorImovel(metragem, quartos)
console.log(`valor do imóvel custa ${preco}R$`)

// EXERCÍCIO 6 MODULO 2 VÍDEO #9

function validar(usuario, senha) {
  if(usuario === 'Farley' && senha === 101010) {
    return true;
  } else {
    return false;
  }
}

let usuario = 'Farley';
let senha = 101010;
let validacao = validar(usuario, senha);
if (validacao) {
  console.log('Acesso PERMITIDO');
} else {
  console.log('Acesso NEGADO! Usuário e Senha Incorretos.')
}

// Arrow function 

// função normal

/*function teste(sob) {
  return 'Farley' + sob;
}*/

// função Arrow

const teste = sob => 'Farley ' + sob;

console.log(teste(' Lima'))


// FUNÇÕES DENTRO DE FUNÇÕES

function addsquare(a, b) {
  const square = (x) => {
    return x * x;
  }
  
  let sqrA = square(a);
  let sqrB = square(b);
  return sqrA + sqrB;
}

console.log(addsquare(4, 5));


// INTRODUÇÃO A ARRAY 

let colors = ['greem', 'red', 'writh', 'black', 'blue'];

console.log(colors[4]);
console.log(colors[0]);

// EXEMPLO 2

let aleatorio = [100, 'chef', false, '10tem']
console.log(aleatorio[3])

// EXEMPLO 3 criando um lista dentro de uma lista

let names = ['silva', 'lima', 'chico'];

let lista1 = ['teste', names];

let lista2 = ['jagua', ['dado', 'bola', 'bila']];
console.log(lista2[0]);
console.log(lista2[1][2]);


// OPERAÇÕES BÁSICAS DE ARRAY 

let ingredientesBolo = [
  'leite',
  'massa',
  'ovo',
  'corante'
];

ingredientesBolo.push('açucar', 'manteiga') // adicionando novos intens

ingredientesBolo.pop(); // remove o ultimo item
ingredientesBolo.shift(); // remove o primeiro item

console.log(ingredientesBolo)

console.log(`Total de ingradientes: ${ingredientesBolo.length}`); // para informar a quantidade de ites

// EXERCÍCIO 7 MODULO 2 VÍDEO #15
// 1 - Indique o numero dque pega ferrari
let carros = [
  'BMW', 
  'Ferrari', 
  'Mercedes'
];
console.log('1. '+carros[1]);

// 2 - troque ferrari por Audi
let carros2 = [
  'BMW', 
  'Ferrari', 
  'Mercedes'
];

const index = carros2.indexOf("Ferrari");
if (index !== -1) {
  carros2[index] = "Audi"
}
console.log('1. '+carros2[1]);

// 3 - Adicione Volvo a lista

let carros3 = [
  "BMW",
  "Audi",
  "Mercedes"
];

carros3.push("Volvo")

console.log('3 '+carros3[3]);

// 4 - informe a quantidade de itens 

console.log(carros3);
console.log(`Total de carros são: ${carros3.length}`);

// CRIANDO OBJETOS 

let personagem = {
  nome:'Farley',
  Idade: 27,
  estado: 'Ceará',
  cidade: 'Pereiro',
  caracteristicas: { // criando objetos dentro de objetos
    esporte:'Musculação',
    formacao: 'Educados físico',
    profissao: 'Supervisor de projetos',
    forca: '50'
  },
  bens: ['moto', 'brinquedos', 'ventilador', 'relógios'] // adicionando uma lista arrey no obejeto

};

console.log(personagem) // exibir todos os objetos

console.log(personagem.nome) // exibir propriedade de um objeto

console.log(`Meu nome é ${personagem.nome}, tenho ${personagem.Idade} anos, moro no estado do ${personagem.estado} e sou natural de ${personagem.cidade}`);

console.log(personagem.caracteristicas.profissao); // exibindo as infomações do obejeto dentro do objeto.

console.log(personagem.bens[0]); // exibindo intem da lista dentro de objeto


// ALTERANDO E ACESSANDO OBJETOS 

personagem.nome = 'João'; // alterando o propriedade do objeto "nome"
console.log(personagem.nome);

personagem.caracteristicas.forca += 5;
console.log(`Aumento da Força em : ${personagem.caracteristicas.forca}`);

personagem.bens.push('Drone'); // adicionado item no arrey "bens"
console.log(personagem.bens)


let personagem2 = { // selecionando objetos dentro de uma array 
  nome2: 'Jack',
  idade2: '55',
  carros4: [
    {modelo: 'jeep', cor: 'preto'},
    {modelo: 'subaru', cor: 'vinho'},
    {modelo: 'maclaren', cor: 'laranja'}
  ]
}
console.log(personagem2.carros4[2].modelo);
console.log(personagem2.carros4[2].cor);

// FUNÇÃO DENTRO DE OBJETO

let pessoa = {
  nome3: 'Francisco',
  sobrenome2: 'Farley',
  idade3:27,
  nomeInteiro: function () {
    return `Me chamo ${this.nome3} ${this.sobrenome2} e tenho ${this.idade3} anos.`
  }
};

console.log(pessoa.nomeInteiro());
