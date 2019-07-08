import { BankAccount } from "../common";

let accounts: BankAccount[] = [{
  name: "Savings Account",
  number: 123456789,
  bsb: "313-197",
  balance: 213000.00,
  selected: false,
}];

export const fetchAccounts = () : Promise<BankAccount[]> => {
  const promise = new Promise<BankAccount[]>((resolve) => {
    setTimeout(() => {
      resolve(accounts)
    }, 500)
  });

  return promise;
}