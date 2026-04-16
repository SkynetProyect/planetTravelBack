import type { Country } from '../../domain/Country';
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

    public getDistance(country1: Country, country2: Country): number {
        const [lat1, lon1] = country1.latlng;
        const [lat2, lon2] = country2.latlng;

        const toRad = (deg: number) => deg * (Math.PI / 180);

        // diferencia de latitud y longitud en radianes
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);

        // fórmula de Haversine
        const sinLat = Math.sin(dLat / 2);
        const sinLon = Math.sin(dLon / 2);
        const a = sinLat * sinLat + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * sinLon * sinLon;

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distancia = 6371 * c;

        return Math.round(distancia);
    }
}

export default CountryUsecase;