export interface CountryName {
  common:      string;   
  official:    string;  
}

export interface Currency {
  name:   string;   
  symbol: string;   
}

export interface Maps {
  googleMaps:      string; 
  openStreetMaps:  string;  
}

/** URLs de bandera (REST Countries `flags`) */
export interface CountryFlags {
  png: string;
  svg: string;
  alt: string;
}

export interface CountryProps {
  ccn3:        string;                     
  name:        CountryName;              
  area:        number;                   
  capital:     string[];                   
  latlng:      [number, number];            
  languages:   Record<string, string>;      
  currencies:  Record<string, Currency>;     
  /** Emoji de bandera */
  flag:        string;
  flags:       CountryFlags;
  maps:        Maps;                     
  population:  number;                   
}

export class Country {
  readonly ccn3:       string;
  readonly name:       CountryName;
  readonly area:       number;
  readonly capital:    string[];
  readonly latlng:     [number, number];
  readonly languages:  Record<string, string>;
  readonly currencies: Record<string, Currency>;
  readonly flag:       string;
  readonly flags:      CountryFlags;
  readonly maps:       Maps;
  readonly population: number;

  constructor(props: CountryProps) {
    this.ccn3       = props.ccn3;
    this.name       = props.name;
    this.area       = props.area;
    this.capital    = props.capital;
    this.latlng     = props.latlng;
    this.languages  = props.languages;
    this.currencies = props.currencies;
    this.flag       = props.flag;
    this.flags      = props.flags;
    this.maps       = props.maps;
    this.population = props.population;
  }
}


