import { Request, Response } from 'express';
import CountryAdapter from '../../application/usecase/CountryUsecase';

class CountryController{

    private readonly adaptadorPaises: CountryAdapter;

    constructor(countryAdapter: CountryAdapter){
        this.adaptadorPaises = countryAdapter;
    }

    public getCountries(req: Request, res: Response) {
        const respuesta = this.adaptadorPaises.getAllCountries();
        res.json(respuesta);
    };


    public getCountryByCode(req: Request, res: Response) {
      const { code } = req.params;
      const respuesta = this.adaptadorPaises.getCountryByCode(code);
      res.json(respuesta);
    };
    
    public getCountryByName(req: Request, res: Response) {
      const { name } = req.query;
      const respuesta = this.adaptadorPaises.getCountryByName(name);
      res.json(respuesta);
    };
    
    public getDistance(req: Request, res: Response) {
      const { from, to } = req.query;
      const respuesta = this.adaptadorPaises.getDistance();
      res.json(respuesta);
    };

}

export default CountryController;
