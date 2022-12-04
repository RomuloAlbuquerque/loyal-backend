import admin from "../entities/admin";
import { bulbasaur, butterfree, card, charmander, clefairy, jigglypuff, squirtle, weedle } from "../objects/card";
import { infoCollection } from "../objects/infoCollection";
import logo from "../objects/logo";
import { pikachu } from "../objects/pikachu";
import { user } from "../objects/user";

const service = {

  adminInfoHome: () => user,

  adminCardHome: () => card,

  clientInfoCollection: ()=> infoCollection,

  clientCardCollection: () => [pikachu, charmander, clefairy, squirtle, jigglypuff, bulbasaur, butterfree, weedle],

  adminLogoHome: () => logo,







  ///////////////////////////////////////////////////////OUTROS TESTES
  listCard: () => card,

  infoCollection: ()=> infoCollection,

  listAdmin: () => [
    {
      name: "Renata",
      idade: 35,
      sexo: "feminino",
      saldo: 10000,
      email: 'renata@email.com',
      password: '12345'
    },
    {
      name: "Romulo",
      idade: 33,
      sexo: "masculino",
      saldo: 50000,
      email: 'romulo.albuquerque@live.com',
      password: '12345'
    },
  ],

  listClient: () => {
    const foundDatabase = {
      name: "Renata",
      idade: 35,
      sexo: "feminino",
      saldo: 10000,
    };

    const object = admin(
      foundDatabase.name,
      foundDatabase.idade,
      foundDatabase.sexo,
      foundDatabase.saldo
    );
    return object;
  },

  cep: (cep: object) => {
    const y = Object.values(cep)[0];
    y === "67030168" ? console.log("certo") : console.log("errado");
    return {
      logradouro: "Campestre",
      complemento: "string",
      bairro: "string",
      localidade: "string",
      uf: "string",
      ibge: "string",
      ddd: "string",
    };
  },
};

export default service;
