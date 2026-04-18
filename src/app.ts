import { AppRoutes } from "./interfaces/router.js";
import { Server } from "./interfaces/server.js";

new Server( 
    Number(process.env.PORT),
    AppRoutes.routes,
).start();

//app.use(express.json());

//app.use("/countries", countriesRouter);

