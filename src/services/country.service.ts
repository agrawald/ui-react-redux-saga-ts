import { BankAccount, Country } from "../common";

let countries: Country[] = [{
  name: "Australia",
  code: "AUS",
  selected: false,
}, {
  name: "India",
  code: "IND",
  selected: false,
}];

export const fetchCountries = () : Promise<Country[]> => {
  const promise = new Promise<Country[]>((resolve) => {
    setTimeout(() => {
      resolve(countries)
    }, 500)
  });

  return promise;
}