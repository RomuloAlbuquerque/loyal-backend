import express from "express";
import adminRouter from "./adminRouter";
import clientRouter from "./clientRouter";

const local = express();

const router = () => {
  return (
    local.use("/admin", adminRouter()), 
    local.use("/client", clientRouter())
  );
};

export default router;
