import type { Country } from '../entity/CountryInterface';

class CountryAdapter{

    public async getAllCountries(): Promise<Array<Country>> {
        return await fetch('https://restcountries.com/v3.1/all?fields=ccn3,name,area,capital,latlng,languages,currencies,flag,maps,population')
            .then(response => response.json())
            .catch((error) => {
                throw new Error('Failed to fetch countries data '+error);
            })
            .then(data => data as Country[]);
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

export default CountryAdapter;