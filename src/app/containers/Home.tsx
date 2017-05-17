import * as React from 'react';
import { connect } from 'react-redux';

import { Hello } from '../../lib/components/hello-world';

@connect()
export default class Home extends  React.Component<any, any> {

    render() {

        return (
            <div>
                <h1>Home Test</h1>
                <Hello name="Pedro" />
            </div>
        );
    }

}
