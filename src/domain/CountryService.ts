

export class CountryService {

  private static toRad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  public static calculateDistance(latlng1: [number, number], latlng2: [number, number]): number {

    const [lat1, lon1] = latlng1;
    const [lat2, lon2] = latlng2;

    const dLat = this.toRad(lat2 - lat1);
    const dLon = this.toRad(lon2 - lon1);

    const sinLat = Math.sin(dLat / 2);
    const sinLon = Math.sin(dLon / 2);

    const a =
      sinLat * sinLat +
      Math.cos(this.toRad(lat1)) *
      Math.cos(this.toRad(lat2)) *
      sinLon * sinLon;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return Math.round(6371 * c);
  }
}