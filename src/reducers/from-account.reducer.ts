import { BaseAction, actionIds, BankAccount } from '../common';

export type FromAccountState = {
  accounts: BankAccount[],
  selected: BankAccount
};

const initState: FromAccountState = {
  accounts: [],
  selected: null
};

export const fromAccountReducer = (state: FromAccountState = initState, action: BaseAction) => {
  switch (action.type) {
    case actionIds.FETCH_ACCOUNTS_COMPLETED:
      return { ...state, accounts: action.payload };
    case actionIds.FROM_ACCOUNT_SELECTED:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
}