import express from "express";
import controller from "../controller/controller";

const local = express();

const clientRouter = () => {
  return (
    local.get("/info-collection", controller.clientInfoCollection),
    local.get("/card-collection", controller.clientCardCollection),
    local.get("/card-details/:id", controller.clientDetails)
  );
};

export default clientRouter;
