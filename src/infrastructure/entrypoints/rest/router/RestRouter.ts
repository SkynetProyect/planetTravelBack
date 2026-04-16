import {Router} from 'express';
import CountryHandler from '../handler/CountryHandler';
import CountryAdapter from '../../../adaptaders/api/adapter/CountryAdapter';

const router = Router();
const countryAdapter = new CountryAdapter();
const countryHandler = new CountryHandler(countryAdapter);

//metodo base de prueba
router.get('/all', countryHandler.getCountries);
router.get("/:code", countryHandler.getCountryByCode);
router.get("/search", countryHandler.getCountryByName);
router.get("/distance", countryHandler.getDistance);

export default router;