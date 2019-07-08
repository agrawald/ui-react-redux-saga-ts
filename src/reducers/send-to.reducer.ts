import { BaseAction, actionIds, Country } from '../common';

export type SendToState = {
  countries: Country[],
  disabled: boolean,
};

const initState: SendToState = {
  countries: [],
  disabled: true,
};

export const sendToReducer = (state: SendToState = initState, action: BaseAction) => {
  switch (action.type) {
    case actionIds.ENABLE_SENDTO:
      return { ...state, disabled: action.payload };
    case actionIds.FETCH_COUNTRIES_COMPLETED:
      return { ...state, countries: action.payload };
    default:
      return state;
  }
}