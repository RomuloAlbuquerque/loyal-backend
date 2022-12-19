import express from "express";
import controller from "../controller/controller";

const local = express();

const adminRouter = () => {
  return (
    local.get("/info-home", controller.adminInfoHome),
    local.get("/card-home", controller.adminCardHome),
    local.get("/logo-home", controller.adminLogoHome)
  );
};

export default adminRouter;
