import React, { Component } from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import Burguer from '../../Components/Burguer/Burguer';

class BurguerBuilder extends Component {
    render() {
        return (
            <Auxiliar>
                <Burguer />
                <div>Build controls</div>
            </Auxiliar>
        );
    }
}

export default BurguerBuilder;