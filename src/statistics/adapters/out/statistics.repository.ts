export interface IStatisticsRepository {
  getStatisticsGeneral(province: string, year: string): Promise<any>;
}
