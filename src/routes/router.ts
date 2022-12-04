import express from "express";
import specifiedRouter from "./userRouter";

const localRouter = express();

const router = {
  instance: () => {
    return (

      localRouter.use('/admin', specifiedRouter.adminInfoHome()),
      localRouter.use('/admin', specifiedRouter.adminCardHome()),
      localRouter.use('/admin', specifiedRouter.adminLogoHome()),

      localRouter.use('/client', specifiedRouter.clientInfoCollection()),
      localRouter.use('/client', specifiedRouter.clientCardCollection()),

      localRouter.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
      }),
  




      /////////////////////////////////////////OUTROS TESTES
      // localRouter.use("/user", specifiedRouter.userRouter()),
      localRouter.use("/card", specifiedRouter.cardRouter()),
      localRouter.use("/info", specifiedRouter.infoCollectionRouter()),
      // localRouter.use("/admin", specifiedRouter.adminRouter()),
      localRouter.use("/client", specifiedRouter.clientRouter()),
      localRouter.use("/", specifiedRouter.login())
    );
  },
};

export default router;
