import type { Country } from '../../domain/Country';
import { CountryService } from '../../domain/CountryService';
import CountryUsecaseInterface from './CountryUsecaseInterface';

class CountryUsecase{
    private readonly countryInterface: CountryUsecaseInterface;

    constructor(countryInterface: CountryUsecaseInterface){
        this.countryInterface = countryInterface;
    }

    public async getAllCountries(): Promise<Array<Country>> {
        return this.countryInterface.getAllCountries();
    }
    
    public async getCountryByCode(code: string): Promise<Country> {
        return this.countryInterface.getCountryByCode(code);

    }

    public async getCountryByName(name: string): Promise<Country> {
        return this.countryInterface.getCountryByName(name);
    };

    public async getDistance(from: string, to: string): Promise<number> {
        const country1 = await this.getCountryByName(from);
        const country2 = await this.getCountryByName(to);
        const distancia = CountryService.calculateDistance(country1.latlng, country2.latlng);

        return distancia;
    }
}

export default CountryUsecase;