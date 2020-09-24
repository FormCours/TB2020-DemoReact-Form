import React, { Component } from 'react';


class Calculatrice extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nb1: '',
            nb2: '',
            op: 'X',
            result: ''
        }
    }

    handleNumberInput = (event) => {
        const name = event.target.name;
        const value = event.target.value.replace(',', '.');

        if(!isNaN(value)) {
            this.setState({
                [name]: value
            })
        }
    }

    handleOperateurInput = (event) => {
        this.setState({
            op: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState((state) => {
            const {nb1, nb2, op} = state;

            let result;
            const val1 = parseFloat(nb1);
            const val2 = parseFloat(nb2);

            switch (op) {
                case '+':
                result = val1 + val2;
                    break;
                case '-':
                    result = val1 - val2;
                    break;
                case '/':
                    if(val2 !== 0) {
                        result = val1 / val2;
                    }
                    else {
                        result = 'Div by 0'
                    }
                    break;
                case 'X':
                    result = val1 * val2;
                    break;
                default:
                    result = 'Math Error';
                    break;
            }

            // Le nouveau state ↓
            return {
                result
            }
        })
    }

    render() {
        const {nb1, nb2, op, result} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nb1: 
                    <input type="text" value={nb1} name="nb1" onChange={this.handleNumberInput}/>
                </label>
                <br/>
                <label>
                    Operation: 
                    <select value={op} onChange={this.handleOperateurInput}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="X">X</option>
                        <option value="/">/</option>
                    </select>
                </label>
                <br/>
                <label>
                    Nb2: 
                    <input type="text" value={nb2} name="nb2" onChange={this.handleNumberInput}/>
                </label>
                <br/>
                <input type="submit" value="Calculer"/>
                <input type="text" value={result} readOnly disabled/>
            </form>
        );
    }
}

export default Calculatrice;