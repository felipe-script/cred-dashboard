export type CoordinatesType = {
  lat: number,
  lng: number
}

export type DetailsType = {
  title: string
  productivePriority: string
  address: string
  city: string
  state: string
  nirf: string
  incra: string
  status: string
}

export interface TableType {
  headers: string[]
  rows: string[][]
}

export type EnrollmentType =  TableType & {}

export type OwnersType =  TableType & {}

export type BarChartType = {
  name: string
  uv: number
  pv: number
  amt: number
}

export type AreaChartType = {
  name: string
  uv: number
  pv: number
  amt: number
  cnt: number
}

export type SelectedFarmType = {
  id: number
  details: DetailsType,
  enrollment: EnrollmentType,
  owners: OwnersType,
  barChart: BarChartType[],
  areaChart: AreaChartType[]
}