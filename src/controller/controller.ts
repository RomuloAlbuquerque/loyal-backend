import service from "../service/service";

const controller = {
  adminInfoHome: (req:any, res:any) => res.json(service.adminInfoHome()),

  adminCardHome: (req:any, res:any) => res.json(service.adminCardHome()),

  clientInfoCollection: (req:any, res:any) => res.json(service.clientInfoCollection()),

  clientCardCollection: (req:any, res:any) => res.json(service.clientCardCollection()),

  adminLogoHome: (req:any, res:any) => res.json(service.adminLogoHome()),

  clientDetails: (req:any, res:any) =>  res.json(service.clientDetails(req.params.id))
 
}

export default controller;
