import { Router } from "express";
import { CountryRouter } from "./router/CountryRouter";


export class AppRoutes {

    static get routes(): Router {

        const router = Router();

        //rutas para cada modulo
        router.use('/api/countries', CountryRouter.routes)

        return router;
    }
}