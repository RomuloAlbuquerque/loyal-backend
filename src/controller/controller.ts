import login from "../service/login";
import service from "../service/service";

const controller = {
  adminInfoHome: (req:any, res:any) => res.json(service.adminInfoHome()),

  adminCardHome: (req:any, res:any) => res.json(service.adminCardHome()),

  clientInfoCollection: (req:any, res:any) => res.json(service.clientInfoCollection()),

  clientCardCollection: (req:any, res:any) => res.json(service.clientCardCollection()),

  adminLogoHome: (req:any, res:any) => res.json(service.adminLogoHome()),
 







  ////////////////////////////////OUTROS TESTES
  // userController: (req: any, res: any) => res.json(service.listUser()),

  cardController: (req: any, res: any) => res.json(service.listCard()),

  infoCollectionController: (req: any, res: any) => res.json(service.infoCollection()),

  // adminController: (req: any, res: any) => res.send(service.listAdmin()),

  clientController: (req: any, res: any) => res.send(service.listClient()),

  loginController: (req: any, res: any) => res.json(login.fazerLogin(req.body)),

  cep: (req: any, res: any) => res.send(service.cep(req.body))
}

export default controller;
