import CountryGateway from "../../domain/gateway/CountryGateway";
import { Country } from "../../infrastructure/adaptaders/api/entity/CountryInterface";

class CountryUsecase{
    private readonly countryGateway: CountryGateway;

    constructor(countryGateway: CountryGateway){
        this.countryGateway = countryGateway;
    }

    getAllCountries(): Promise<Array<Country>>{
        return this.countryGateway.getAllCountries();
    };
    getCountryByCode(code: string): Promise<Country>{
        return this.countryGateway.getCountryByCode(code);
    };
    getCountryByName(name: string): Promise<Country>{
        return this.countryGateway.getCountryByName(name);
    };
    getDistance(country1: Country, country2: Country): number{
        return this.countryGateway.getDistance(country1, country2);
    };
}

export default CountryUsecase;