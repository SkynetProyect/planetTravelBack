export class SearchCountryDto {
  constructor(
    public readonly name: string,
  ) {}

  static create(query: any): [string?, SearchCountryDto?] {
    const { name } = query;

    if (!name) return ['nombre es requerido'];
    if (typeof name !== 'string') return ['nombre debe ser un string'];

    const onlyLetters = /^[a-zA-Z\s]+$/;

    if (!onlyLetters.test(name)) {
      return ['El nombre de pais solo debe contener letras'];
    }

    return [undefined, new SearchCountryDto(name)];
  }
}