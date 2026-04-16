import {Router} from 'express';
import CountryController from '../controller/CountryController';
import CountryUsecase from '../../application/usecase/CountryUsecase';
import CountryAdapter from '../../infrastructure/CountryAdapter';

const router = Router();

const countryGateway: CountryAdapter = new CountryAdapter();
const countryUsecase: CountryUsecase = new CountryUsecase(countryGateway);
const countryController: CountryController = new CountryController(countryUsecase);

//metodo base de prueba
router.get('/all', countryController.getCountries);
router.get("/:code", countryController.getCountryByCode);
router.get("/search", countryController.getCountryByName);
router.post("/distance", countryController.getDistance);

export default router;