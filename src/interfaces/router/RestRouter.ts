import {Router} from 'express';
import CountryHandler from '../controller/CountryController';
import CountryUsecase from '../../application/usecase/CountryUsecase';
import CountryAdapter from '../../infrastructure/CountryAdapter';

const router = Router();

const countryGateway: CountryAdapter = new CountryAdapter();
const countryUsecase: CountryUsecase = new CountryUsecase(countryGateway);
const countryHandler: CountryHandler = new CountryHandler(countryUsecase);

//metodo base de prueba
router.get('/all', countryHandler.getCountries);
router.get("/:code", countryHandler.getCountryByCode);
router.get("/search", countryHandler.getCountryByName);
router.post("/distance", countryHandler.getDistance);

export default router;