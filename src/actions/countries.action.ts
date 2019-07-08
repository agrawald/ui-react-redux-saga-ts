import {BaseAction, actionIds, Country} from '../common';

 export const fetchCountriesAction : () => BaseAction = () => ({
  type: actionIds.FETCH_COUNTRIES,
  payload: null,
 });
 
 export const fetchCountriesCompletedAction: (countries: Country[]) => BaseAction = (countries) => ({
   type: actionIds.FETCH_COUNTRIES_COMPLETED,
   payload: countries,
 });

 export const enableSendToAction: () => BaseAction = () => ({
     type: actionIds.ENABLE_SENDTO,
     payload: false,
 });