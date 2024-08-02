import { apiInstance } from "../base";
import { CountriesAll, CountyDetails } from "./models";

export const getAllCountry = (): Promise<CountriesAll[]> => {
  return apiInstance.get(`/all`, {
    params: { fields: "name,flags,capital" },
  });
};

export const getCountryDetails = (name: string): Promise<CountyDetails[]> => {
  return apiInstance.get(`/name/${name.replaceAll("_", " ")}`);
};
