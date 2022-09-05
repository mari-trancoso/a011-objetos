//Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

const sacolao = []

/*a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

```jsx
nome: string;
preco: number;
disponibilidade: boolean;
```*/

let fruta1 = {
    nome: "banana",
    preco: 2.99,
    disponibilidade: true
}

let fruta2 = {
    nome: "limão",
    preco: 1.79,
    disponibilidade: true
}

let fruta3 = {
    nome: "jaca",
    preco: 7.39,
    disponibilidade: false
}

//b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

sacolao.push(fruta1, fruta2, fruta3)

//c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**

console.log(`Sacolão: ${sacolao}`)

console.log(sacolao)

console.log("sacolão:", sacolao)
