import type { Country } from '../../domain/Country';
import CountryUsecaseInterface from "../../application/usecase/CountryUsecaseInterface";
import { CountryMapper } from '../mappers/CountryMapper';

class CountryAdapter implements CountryUsecaseInterface{

    private readonly BASE_URL = "https://restcountries.com/v3.1";
    /** Máximo 10 campos en la API pública; `flag` (emoji) se omite para dejar sitio a `flags` (URLs). */
    private readonly FIELDS =
        "ccn3,name,area,capital,latlng,languages,currencies,flags,maps,population";


    public async getAllCountries(): Promise<Country[]> {
        const url = `${this.BASE_URL}/all?fields=${this.FIELDS}`;
        let response: Response;
        try {
            response = await fetch(url);
        } catch (e) {
            const msg = e instanceof Error ? e.message : String(e);
            throw new Error(`No se pudo conectar con REST Countries (${msg})`);
        }
        if (!response.ok) {
            const body = await response.text();
            throw new Error(
                `REST Countries respondió ${response.status}: ${body.slice(0, 200)}`,
            );
        }
        const data: unknown = await response.json();
        if (!Array.isArray(data)) {
            throw new Error(
                `REST Countries devolvió un cuerpo inesperado (no es un array): ${JSON.stringify(data).slice(0, 200)}`,
            );
        }
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