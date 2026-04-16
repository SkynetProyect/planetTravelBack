import {Router} from 'express';
import CountryHandler from '../handler/CountryHandler';

const router = Router();
const countryHandler = new CountryHandler();
//metodo base de prueba
router.get('/all', countryHandler.getCountries);

export default router;