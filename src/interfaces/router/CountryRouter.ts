import { Router } from "express";
import CountryController from "../controller/CountryController";
import CountryUsecase from "../../application/usecase/CountryUsecase";
import CountryAdapter from "../../infrastructure/adapters/CountryAdapter";

export class CountryRouter {

    static get routes(): Router {

        const router = Router();

        const countryGateway: CountryAdapter = new CountryAdapter();
        const countryUsecase: CountryUsecase = new CountryUsecase(countryGateway);
        const countryController: CountryController = new CountryController(countryUsecase);

        //metodo base de prueba
        router.get("/", countryController.getCountries);
        router.get("/search", countryController.getCountryByName);
        router.get("/distance", countryController.getDistance);    
        router.get("/:code", countryController.getCountryByCode);
        
        
        return router;
    }
}