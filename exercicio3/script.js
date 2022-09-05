/*# Exercício 3

Observe o objeto abaixo e, utilizando o **espalhamento** resolva os exercícios a seguir:*/

const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

//a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”

const pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
}

console.log("Pokemon 1: ", pokemon1)
console.log("Pokemon 2: ", pokemon2)

/*b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar 
um **array** de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o 
objeto abaixo utilizando `**push()**`

```text
nome: Investida;
dano: 40;
tipo: Normal;
precisao: 100;
```*/

pokemon1.ataques = []

ataque1 = {nome:"Investida", dano: 40, tipo:"normal", precisao: 100}
pokemon1.ataques.push(ataque1)
console.log(pokemon1)


//c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da
//propriedade criada para o objeto original;

pokemon2.ataques = [...pokemon1.ataques]
console.log("Ataques incluido no pokemon 2:", pokemon2)


//d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, 
//**100 de precisão**, e de tipo **“Grama”**;

//PQ NÃO DA CERTO ASSIM!
//pokemon1.ataques.push({nome: "Folha Navalha"}, {dano: 45}, {tipo: "grama"}, {precisao: 100})
//tem que ser  pokemon1.ataques.push({nome: "Folha Navalha", dano: 45, tipo: "grama", precisao: 100})

ataque2 = {nome:"Folha de navalha", dano:45, tipo:"grama", precisao:100}
pokemon1.ataques.push(ataque2)
//console.log(pokemon1)

//e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e 
//do tipo **“Água”**;

ataques3 = {nome:"Jato de água", dano: 40, precisão: 100, tipo:"água"}
pokemon2.ataques.push(ataques3)
//console.log(pokemon2)

//f) Imprima os dois objetos no console.*/

console.log(pokemon1)
console.log(pokemon2)
