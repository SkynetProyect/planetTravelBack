import { AppRoutes } from "./interfaces/router.js";
import { Server } from "./interfaces/server.js";

const port = Number(process.env.PORT);
new Server(
  Number.isFinite(port) && port > 0 ? port : 3000,
  AppRoutes.routes,
).start();

//app.use(express.json());

//app.use("/countries", countriesRouter);

