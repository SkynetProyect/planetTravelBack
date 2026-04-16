export interface Country {
  flag: string;

  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };

  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };

  languages: {
    [key: string]: string;
  };

  latlng: [number, number];

  ccn3: string;

  capital: string[];

  area: number;

  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };

  population: number;
}