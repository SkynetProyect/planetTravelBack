import { Request, Response } from 'express';
import CountryUsecase from '../../application/usecase/CountryUsecase';
import { Country } from '../../domain/Country';
import { GetDistanceDto } from '../../application/dtos/get-distance.dto';
import { SearchCountryDto } from '../../application/dtos/search-country.dto';
import { GetCountryCodeDto } from '../../application/dtos/get-country-code.dto';

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

      const [error, dto] = GetCountryCodeDto.create(req.params);

      if (error) {
        return res.status(400).json({ error });
      }

      try {
        const country = await this.countryUseCase.getCountryByCode(dto!.code);
        res.json(country);
      } catch (error) {
        res.status(404).json({ error: 'Pais no encontrado' });
      }
    };
    
    public getCountryByName = async (req: Request, res: Response) => {

      const [error, dto] = SearchCountryDto.create(req.query);
      
      if (error) {
        return res.status(400).json({ error });
      }

      try {
        const country = await this.countryUseCase.getCountryByName(dto!.name);
        res.json(country);
      } catch (error) {
        res.status(404).json({ error: 'Pais no encontrado' });
      }
    };


    public getDistance = async (req: Request, res: Response) => {
      
      const [error, dto] = GetDistanceDto.create(req.query);
      
      if (error) {
        return res.status(400).json({ error });
      }

      try {
        const respuesta = await this.countryUseCase.getDistance(
          dto!.from,
          dto!.to
        );

        res.json({distance: respuesta });

      } catch (error) {
        res.status(409).json({ error: 'Error al calcular la distancia' });
      }
    };
        
    

}

export default CountryController;
