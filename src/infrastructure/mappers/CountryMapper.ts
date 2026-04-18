import { Country } from "../../domain/Country";


//JSON como viene country de API Countries
interface RawCountry {
  ccn3: string;

  name: {
    common: string;
    official: string;
    nativeName: Record<string, { official: string; common: string }>;  
  };

  area: number;
  capital: string[];
  latlng: [number, number];
  languages: Record<string, string>;
  currencies: Record<string, { name: string; symbol: string }>;
  flag: string;

  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
}

//Convertir JSON a objeto Country
export class CountryMapper {


  static toEntity(raw: RawCountry): Country {
    return new Country({
      ccn3:       raw.ccn3,

      name: {
        common:   raw.name.common,
        official: raw.name.official,       
      },
      area:       raw.area,
      capital:    raw.capital ?? [],        
      latlng:     raw.latlng,
      languages:  raw.languages,
      currencies: raw.currencies,
      flag:       raw.flag,
      maps:       raw.maps,
      population: raw.population,
    });
  }

  static toEntityList(rawCountryList: RawCountry[]): Country[] {
    return rawCountryList.map((rawCountry) => CountryMapper.toEntity(rawCountry));
  }
}