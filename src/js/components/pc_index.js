/**
 * Created by lichao on 2017/4/28.
 */

import React, {Component} from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
export default class PCIndex extends Component {
    render() {
        return (
            <div>
                <PCHeader/>
                <PCFooter/>
            </div>
        );
    }
}

// ReactDOM.render(<Index/>);
