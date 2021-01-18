import axios, { AxiosInstance } from "axios";

export class DataProvider {
  private HTTP: AxiosInstance;

  constructor(baseUrl = "http://localhost:3000/api/") {
    this.HTTP = axios.create({
      baseURL: baseUrl
    });
  }

  async get<T>(resourceAddress: string): Promise<T> {
    const response = await this.HTTP.get(resourceAddress);
    return response.data;
  }
}

export const dataProvider = new DataProvider();
