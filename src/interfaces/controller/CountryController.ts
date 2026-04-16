import { Request, Response } from 'express';
import CountryUsecase from '../../application/usecase/CountryUsecase';
import { Country } from '../../domain/Country';

class CountryController{

    private readonly countryUseCase: CountryUsecase;
    

    constructor(countryUseCase: CountryUsecase){
        this.countryUseCase = countryUseCase;
    }

    public getCountries(req: Request, res: Response) {
        const respuesta = this.countryUseCase.getAllCountries();
        res.json(respuesta);
    };


    public getCountryByCode(req: Request, res: Response) {
      const { code } = req.params as { code: string };
      const respuesta = this.countryUseCase.getCountryByCode(code);
      res.json(respuesta);
    };
    
    public getCountryByName(req: Request, res: Response) {
      const { name } = req.query as { name: string };
      const respuesta = this.countryUseCase.getCountryByName(name);
      res.json(respuesta);
    };
    
    public getDistance(req: Request, res: Response) {
      const { from, to } = req.body as { from: Country, to: Country };
      const respuesta = this.countryUseCase.getDistance(from, to);
      res.json(respuesta);
    };

}

export default CountryController;
