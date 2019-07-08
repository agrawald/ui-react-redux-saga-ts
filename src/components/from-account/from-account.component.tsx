import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { fetchAccountsAction } from '../../actions/accounts.action';
import { BankAccount } from '../../common';
import { State } from '../../reducers';
import { AccountComponent, AccountContainer } from './account.component';

interface Props {
  fromAccounts: BankAccount[];
}

interface PropsFromDispatch {
  fetchAccounts: () => void
}

type AllProps = Props & PropsFromDispatch & DispatchProp;

export class FromAccountComponent extends React.Component<AllProps, State> {
  render() {
    return (
      <div>
        <label htmlFor="fromAccount">From Account: </label>
        <select id="fromAccount">
          <option selected>---</option>
          {
            this.props.fromAccounts.map((account, idx) => {
              return <AccountContainer account={account} />
            })
          }
        </select>
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchAccountsAction());
  }
}

const mapStateToProps = (state: State): Props => ({
  fromAccounts: state.fromAccountState.accounts
});

const mapDispatchToProps = (dispatch) => ({
  fetchAccounts: dispatch(fetchAccountsAction()),
  dispatch
});

export const FromAccountContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FromAccountComponent);
