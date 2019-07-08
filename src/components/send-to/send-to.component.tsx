import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { fetchAccountsAction } from '../../actions/accounts.action';
import { fetchCountriesAction } from '../../actions/countries.action';
import { Country } from '../../common';
import { State } from '../../reducers';
import { CountryComponent } from './country.component';
import { stat } from 'fs';

interface Props {
  countries: Country[];
  disabled: boolean
}

interface PropsFromDispatch {
  fetchCountries: () => void
}

type AllProps = Props & PropsFromDispatch & DispatchProp;

export class SendToComponent extends React.Component<AllProps, State> {
  render() {
    return (
      <div>
        <label htmlFor="sendTo">Send To: </label>
        <select id="sendTo" disabled={this.props.disabled}>
          <option selected>---</option>
          {
            this.props.countries.map((country, idx) => {
              return <CountryComponent country={country} selected={false} />
            })
          }
        </select>
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchCountriesAction());
  }
}

const mapStateToProps = (state: State): Props => ({
  countries: state.sendToState.countries,
  disabled: state.sendToState.disabled,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCountries: dispatch(fetchAccountsAction()),
  dispatch
});

export const SendToContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SendToComponent);
