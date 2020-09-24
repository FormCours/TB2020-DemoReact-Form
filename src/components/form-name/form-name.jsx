import React, {Component} from 'react';

class FormName extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            last: null
        };
    }

    handleInput = (event) => {
        console.log(event.target.value);
        
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState((state) => ({
            last: state.value,
            value: ''
        }));
    }

    render() {
        const {value, last} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" onChange={this.handleInput} value={value} name="value" />
                    <input type="submit" value="Valider"/>
                </div>
                {last !== null && (
                    <p>Dernier nom validé : {last}</p>
                )}
            </form>
        );
    }
}

export default FormName;
