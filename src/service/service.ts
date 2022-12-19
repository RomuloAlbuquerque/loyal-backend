import admin from "../entities/admin";
import { cidia, daiane, iranilde, Jucy, nhanguielly, owner, renata, romulo, silveira, socorro, val } from "../objects/card";
import { infoCollection } from "../objects/infoCollection";
import logo from "../objects/logo";
import { info } from "../objects/info";
import clientList from "../objects/clientList";

const service = {

  adminInfoHome: () => info,

  adminCardHome: () => owner,

  adminLogoHome: () => logo,

  clientInfoCollection: ()=> infoCollection,

  clientCardCollection: () => [socorro, val, silveira, daiane, renata, Jucy, nhanguielly, romulo, iranilde],

  clientDetails: (id:any) => clientList.find(x=>Number(x.id)===Number(id))
  
  // }clientList.map( (x)=> Number(id) === Number(x.id) ? x : null) 

}
export default service;
