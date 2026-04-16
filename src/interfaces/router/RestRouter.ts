import {Router} from 'express';
import CountryHandler from '../controller/CountryController';
import CountryUsecase from '../../application/usecase/CountryUsecase';
import CountryUsecaseInterface from '../../application/usecase/CountryUsecaseInterface';

const router = Router();

const countryGateway = new CountryUsecaseInterface();
const countryUsecase = new CountryUsecase(countryGateway);
const countryHandler = new CountryHandler(countryUsecase);

//metodo base de prueba
router.get('/all', countryHandler.getCountries);
router.get("/:code", countryHandler.getCountryByCode);
router.get("/search", countryHandler.getCountryByName);
router.get("/distance", countryHandler.getDistance);

export default router;