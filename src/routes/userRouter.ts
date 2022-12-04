import express from 'express'
import controller from '../controller/controller'

const localRouter = express()

const specifiedRouter = {
    adminInfoHome : ()=> localRouter.get("/info-home", controller.adminInfoHome),
    adminCardHome : ()=> localRouter.get("/card-home", controller.adminCardHome),    
    adminLogoHome : ()=> localRouter.get('/logo-home', controller.adminLogoHome),

    clientInfoCollection : ()=> localRouter.get("/info-collection", controller.clientInfoCollection),
    clientCardCollection : ()=> localRouter.get('/card-collection', controller.clientCardCollection),




    ////////////////////////////////////////OUTROS TESTES
    cardRouter : ()=> localRouter.get("/card", controller.cardController),
    infoCollectionRouter : ()=> localRouter.get("/info-collection", controller.infoCollectionController),
    // adminRouter : ()=> localRouter.get("/list", controller.adminController),
    clientRouter : ()=> localRouter.get("/list", controller.clientController),
    login : ()=> localRouter.post("/login", controller.loginController),
    cep : ()=> localRouter.post("/cep", controller.cep)
}

export default specifiedRouter