export class GetCountryCodeDto {
  constructor(
    public readonly code: string,
  ) {}

  static create(query: any): [string?, GetCountryCodeDto?] {
    const { code } = query;

    if (!code) return ['codigo es requerido'];

    const onlyNumbers = /^[0-9]+$/;

    if (!onlyNumbers.test(code)) {
      return ['El codigo de pais solo debe contener numeros'];
    }

    return [undefined, new GetCountryCodeDto(code)];
  }
}