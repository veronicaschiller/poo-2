import { faker } from "@faker-js/faker";
/**
 * QUEST 8: Implemente uma função que retorne os dados dos 
 * clientes que já realizaram mais de 15 compras.
 * 
 */

const filteredClientByDatePurchased = () => {
    return clientes.filter((cliente) => cliente.contpurchase > 15 )
};  

/*
* QUEST 9: Desenvolva uma função que, dado um nome de entrada,
* retorna se o nome está contido na lista.
*/

const filteredClientByname = (name) => {
    clients 
    .filter((client)=> client.name(name))
    .map((filteredClient) => filteredClient.name.split(" ")[0]);

}

/**
 * QUEST 10: Implemente uma função que retorna o total de vendas realizadas
 * somando o total de compras de todos os clientes.
 */

/**const totalclient = () => {
    const contpurchase.reduce(function (acumulador, valorAtual){
return acumulador + valorAtual;
    },0)
}*/