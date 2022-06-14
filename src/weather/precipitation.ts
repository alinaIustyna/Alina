export enum PrecipitationType {
  Snow,
  Rain
}
export class Precipitation {
  constructor(public type: PrecipitationType, public value: number) {}
}
