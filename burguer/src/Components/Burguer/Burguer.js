import React from 'react';
import classes from './Burguer.module.css';
import BurguerIngredient from './BurguerIngredients/BurguerIngredients';

const burguer = (props) => {
    const transformedIngredient = Object.keys(props.ingredient)
        .map(igKey =>{
            //TODO: IMPLEMENTAR AULA 129 6:00
            return [...Array()]
        });
    return(
        <div className={classes.Burguer}>
            <BurguerIngredient type="bread-top"/>
            <BurguerIngredient type="cheese"/>
            <BurguerIngredient type="meat"/>
            <BurguerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burguer;