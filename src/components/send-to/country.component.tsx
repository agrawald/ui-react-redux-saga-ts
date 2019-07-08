import * as React from 'react';
import { Country } from '../../common';

interface Props {
    country: Country;
    selected: boolean;
}

export class CountryComponent extends React.Component<Props> {
    render() {
        const { name, code } = this.props.country;
        return (
            <option key={code} selected={this.props.selected}>
                {name}
            </option>
        );
    }
}