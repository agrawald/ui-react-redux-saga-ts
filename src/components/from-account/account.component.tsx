import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { accountSelectedAction } from '../../actions/accounts.action';
import { BankAccount } from '../../common';
import { State } from '../../reducers';

interface Props {
    account: BankAccount;
}

interface PropsFromDispatch {
    accountSelected: (account: BankAccount) => void;
}

type AllProps = Props & PropsFromDispatch & DispatchProp;

export class AccountComponent extends React.Component<AllProps, State> {
    render() {
        console.log(this.props);
        if (this.props.account) {
            const { name, number, bsb, balance, selected } = this.props.account;
            return (
                <option key={number} selected={selected} onSelectCapture={() => this.props.accountSelected(this.props.account)}>
                    {name} - {balance} ({bsb} {number})
                </option>
            );
        }

        return null;
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    accountSelected: dispatch(accountSelectedAction(ownProps.account)),
    dispatch
});

export const AccountContainer = connect(
    null,
    mapDispatchToProps
)(AccountComponent);
