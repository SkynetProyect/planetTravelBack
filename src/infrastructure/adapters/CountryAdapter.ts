import type { Country } from '../../domain/Country';
import CountryUsecaseInterface from "../../application/usecase/CountryUsecaseInterface";
import { CountryMapper } from '../mappers/CountryMapper';

class CountryAdapter implements CountryUsecaseInterface{

    private readonly BASE_URL = "https://restcountries.com/v3.1";
    private readonly FIELDS = "ccn3,name,area,capital,latlng,languages,currencies,flag,maps,population";


    public async getAllCountries(): Promise<Country[]> {
        const response = await fetch(`${this.BASE_URL}/all?fields=${this.FIELDS}`);
        if (!response.ok) throw new Error("Fallo peticion para obtener paises");
        const data = await response.json();
        return CountryMapper.toEntityList(data);
    }   
    
    public async getCountryByCode(code: string): Promise<Country> {

        const countries = await this.getAllCountries();
        const country = countries.find(c => c.ccn3 === code);

        if (!country) {
            console.log('Country not found for code: ' + code);
            throw new Error("Country not found");
        }

        return country;
    }

    public async getCountryByName(name: string): Promise<Country> {
        const countries = await this.getAllCountries();
        const country = countries.find(c => c.name.common.toLowerCase() === name.toLowerCase());

        if (!country) {
            console.log('Country not found for name: ' + name);
            throw new Error("Country not found");
        }

        return country;
    };

}

export default CountryAdapter;