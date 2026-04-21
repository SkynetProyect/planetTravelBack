

export class GetDistanceDto {

  private constructor(
    public readonly from: string,
    public readonly to: string,
  ) {}


  static create(query: any): [string?, GetDistanceDto?] {
    const { from, to } = query;

    if (!from) return ['Falta poner el pais de origen'];
    if (!to) return ['Falta poner el pais de destino'];

    if (typeof from !== 'string') return ['debe ser string'];
    if (typeof to !== 'string') return [' debe ser string'];

    return [undefined, new GetDistanceDto(from, to)];
  }
}