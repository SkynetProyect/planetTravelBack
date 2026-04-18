import { Country } from "../../domain/Country";

interface CountryUsecaseInterface{
    getAllCountries(): Promise<Array<Country>>;
    
    getCountryByCode(code: string): Promise<Country>;

    getCountryByName(name: string): Promise<Country>;

}

export default CountryUsecaseInterface;