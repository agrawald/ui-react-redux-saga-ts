export const actionIds = {
  FETCH_ACCOUNTS: '[0] Fetching all the bank accounts for the user',
  FETCH_ACCOUNTS_COMPLETED: '[1] AccountService async service returned account list',
  FETCH_COUNTRIES: '[0] Fetching all the countries for the user',
  FETCH_COUNTRIES_COMPLETED: '[1] CountryService async service returned country list',
  FROM_ACCOUNT_SELECTED: '[0] From Account Selected',
  ENABLE_SENDTO: 'Enable send to drop down',
}

export interface BaseAction {
  type : string;
  payload: any;
}

export interface BankAccount {
  name: string;
  number: number;
  bsb: string;
  balance: number;
  selected: boolean;
}

export interface Country {
  name: string;
  code: string;
  selected: boolean;
}