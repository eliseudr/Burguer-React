import React, { Component } from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import Burguer from '../../Components/Burguer/Burguer';

class BurguerBuilder extends Component {
    state = {
        ingredient:{
            salad: 1, 
            bacon: 1,
            cheese: 2,
            meat: 2,
        }
    }

    render() {
        return (
            <Auxiliar>
                <Burguer ingredient={this.state.ingredient}/>
                <div >Build controls</div>
            </Auxiliar>
        );
    }
}

export default BurguerBuilder;