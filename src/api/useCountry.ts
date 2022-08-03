import { useQuery } from "react-query";

import { apiClientFetch } from "./apiClient";

export type IUseCountry = {
  alpha_two_code: string;
  domains: string[];
  web_pages: string[];
  country: string;
  name: string;
  "state-province": string;
};

export const useCountry = (country: string) => {
  return useQuery("countries", () =>
    apiClientFetch<IUseCountry[]>(`search?country=${country}`)
  );
};
