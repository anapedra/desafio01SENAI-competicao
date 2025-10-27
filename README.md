# 🏆 Projeto de Certificação 1: Pontuação dos Atletas

**Autoria:** Ana Santana

## Descrição do Projeto

Este projeto foi desenvolvido como parte da Trilha de Lógica de Programação, com o objetivo de criar uma aplicação capaz de processar o nome e as notas de atletas em uma competição de ginástica artística, aplicando uma regra de cálculo de média específica.

## 🎯 Regra de Negócio

A competição utiliza cinco jurados, e a média de pontuação do atleta é calculada da seguinte forma:

* As notas são ordenadas.
* A maior e a menor nota são **desconsideradas**.
* A média final é calculada com base nas **três notas restantes**.

---

## 📝 Especificações do Projeto

### Requisito

Deverá criar uma função capaz de receber uma matriz de objetos contendo o nome do atleta e as cinco notas atribuídas. A sua função deverá calcular a média das notas sem considerar a maior e menor nota do atleta. Por fim, deverá apresentar ao usuário o nome de cada atleta, seguido das notas e da média calculada.

### Entrada Utilizada

```javascript
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

 ### Saída Prevista

 Atleta: Cesar Abascal
Notas Obtidas: 10,10,7.88,8.42,9.34
Média Válida: 9,253333

Atleta: Fernando Puntel
Notas Obtidas: 10,10,7,8,9.33
Média Válida: 9.11

Atleta: Daiane Jelinsky
Notas Obtidas: 10,7,8,9.5,9.5
Média Válida: 9

Atleta: Bruno Castro
Notas Obtidas: 10,10,10,9,9.5
Média Válida: 9.83333333333