import { Country } from "../../domain/Country";


// JSON como viene de REST Countries (algunos campos pueden faltar en territorios raros o respuestas parciales)
interface RawCountry {
  ccn3?: string;
  name?: {
    common: string;
    official: string;
    nativeName?: Record<string, { official: string; common: string }>;
  };
  area?: number;
  capital?: string[];
  latlng?: [number, number];
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol: string }>;
  flag?: string;
  flags?: {
    png?: string;
    svg?: string;
    alt?: string;
  };
  maps?: {
    googleMaps?: string;
    openStreetMaps?: string;
  };
  population?: number;
}

//Convertir JSON a objeto Country
export class CountryMapper {


  static toEntity(raw: RawCountry): Country {
    const latlng = raw.latlng;
    const safeLatLng: [number, number] =
      Array.isArray(latlng) &&
      latlng.length >= 2 &&
      Number.isFinite(latlng[0]) &&
      Number.isFinite(latlng[1])
        ? [latlng[0], latlng[1]]
        : [0, 0];

    return new Country({
      ccn3: String(raw.ccn3 ?? ""),

      name: {
        common: raw.name?.common ?? "—",
        official: raw.name?.official ?? "—",
      },
      area: raw.area ?? 0,
      capital: raw.capital ?? [],
      latlng: safeLatLng,
      languages: raw.languages ?? {},
      currencies: raw.currencies ?? {},
      flag: raw.flag ?? "",
      flags: {
        png: raw.flags?.png ?? "",
        svg: raw.flags?.svg ?? "",
        alt: raw.flags?.alt ?? "",
      },
      maps: {
        googleMaps: raw.maps?.googleMaps ?? "",
        openStreetMaps: raw.maps?.openStreetMaps ?? "",
      },
      population: raw.population ?? 0,
    });
  }

  static toEntityList(rawCountryList: unknown[]): Country[] {
    return rawCountryList.map((raw) => CountryMapper.toEntity(raw as RawCountry));
  }
}