import { Request, Response } from 'express';
import CountryUsecase from '../../application/usecase/CountryUsecase';
import { Country } from '../../domain/Country';

class CountryController{

    private readonly countryUseCase: CountryUsecase;
    

    constructor(countryUseCase: CountryUsecase){
        this.countryUseCase = countryUseCase;
    }

    public getCountries = async (req: Request, res: Response) => {
      try {
        const countries = await this.countryUseCase.getAllCountries();
        res.json(countries);
      } catch (error) {
        console.error("getCountries:", error);
        const payload: { error: string; message?: string } = {
          error: "Error al obtener los paises",
        };
        if (process.env.NODE_ENV !== "production" && error instanceof Error) {
          payload.message = error.message;
        }
        res.status(500).json(payload);
      }
    };


    public getCountryByCode = async (req: Request, res: Response) => {
      const { code } = req.params as { code: string };
      try {
        const country = await this.countryUseCase.getCountryByCode(code);
        res.json(country);
      } catch (error) {
        res.status(404).json({ error: 'Pais no encontrado' });
      }
    };
    
    public getCountryByName = async (req: Request, res: Response) => {
      const { name } = req.query as { name: string };
      try {
        const country = await this.countryUseCase.getCountryByName(name);
        res.json(country);
      } catch (error) {
        res.status(404).json({ error: 'Pais no encontrado' });
      }
    };
    
    public getDistance = async (req: Request, res: Response) => {
      const { from, to } = req.query as { from: string, to: string };
      try {
        const respuesta = await this.countryUseCase.getDistance(from, to);
        res.json(respuesta);
      } catch (error) {
        res.status(500).json({ error: 'Error al calcular la distancia' });
      }
    };

}

export default CountryController;
