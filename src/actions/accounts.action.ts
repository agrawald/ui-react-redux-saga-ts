import { BaseAction, actionIds, BankAccount } from '../common';

export const fetchAccountsAction: () => BaseAction = () => ({
  type: actionIds.FETCH_ACCOUNTS,
  payload: null,
});

export const fetchAccountsCompletedAction: (accounts: BankAccount[]) => BaseAction = (accounts) => ({
  type: actionIds.FETCH_ACCOUNTS_COMPLETED,
  payload: accounts,
});

export const accountSelectedAction: (account: BankAccount) => BaseAction = (account) => ({
  type: actionIds.FROM_ACCOUNT_SELECTED,
  payload: account
});
