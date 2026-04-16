import { Country } from "../../infrastructure/adaptaders/api/entity/CountryInterface";

interface CountryGateway{

    getAllCountries(): Promise<Array<Country>>;
    getCountryByCode(code: string): Promise<Country>;
    getCountryByName(name: string): Promise<Country>;
    getDistance(country1: Country, country2: Country): number;

}

export default CountryGateway;