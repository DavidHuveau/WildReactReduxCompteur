import React from 'react';
import { connect } from "react-redux";
import {
    addAction,
    removeAction,
    add10Action,
    remove10Action,
    resetAction
} from '../actions';

const CounterContainer = props => {
    const { 
        valueCpt, 
        add, 
        remove,
        add10,
        remove10,
        reset
    } = props;

    return (
        <div>
            <p>{valueCpt}</p>
            <button onClick={add}>+</button>
            <button onClick={remove}>-</button>
            <button onClick={add10}>+10</button>
            <button onClick={remove10}>-10</button>
            <button onClick={reset}>reset</button>       
        </div>
)};

const mapStateToProps = state => ({
    valueCpt: state
});
  
const mapDispatchToProps = dispatch => ({
    add: () => dispatch(addAction),
    remove: () => dispatch(removeAction),
    add10: () => dispatch(add10Action),
    remove10: () => dispatch(remove10Action),
    reset: () => dispatch(resetAction)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CounterContainer);