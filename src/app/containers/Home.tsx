import * as React from 'react';
import { connect } from 'react-redux';

import { Hello } from '../../lib/components/hello-world';
import FieldText from '../../lib/components/form-fields/textbox/FieldText';

@connect()
export default class Home extends  React.Component<any, any> {

    render() {

        return (
            <div>
                <h1>Home Test</h1>
                <Hello name="Maxim" />

                <form>
                    <FieldText id="test" placeholder="" className="" label="Tutty Frutty" onChange={() => {}} value="Guddy guddy" />
                </form>
            </div>
        );
    }

}
