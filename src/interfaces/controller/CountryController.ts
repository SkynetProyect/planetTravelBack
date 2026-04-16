import { Request, Response } from 'express';
import CountryAdapter from '../../application/usecase/CountryUsecase';
import { Country } from '../../domain/Country';

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
      const { code } = req.params as { code: string };
      const respuesta = this.adaptadorPaises.getCountryByCode(code);
      res.json(respuesta);
    };
    
    public getCountryByName(req: Request, res: Response) {
      const { name } = req.query as { name: string };
      const respuesta = this.adaptadorPaises.getCountryByName(name);
      res.json(respuesta);
    };
    
    public getDistance(req: Request, res: Response) {
      const { from, to } = req.body as { from: Country, to: Country };
      const respuesta = this.adaptadorPaises.getDistance(from, to);
      res.json(respuesta);
    };

}

export default CountryController;
