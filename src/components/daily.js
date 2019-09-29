import React from 'react';

class Daily extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            input: '',
        }
    }

    handleButton = (event) => {
        let counter = this.state.counter
        this.setState((currentState) => {
            return {
                todos: currentState.todos.concat([this.state.input]),
                input: ''
            }
        })
    }
    
    handleInput = event => {
        this.setState({
            input: event.target.value
        })
    }

    handleRemove = (item) => {
        this.setState((currentState) => {
            return {
                todos: currentState.todos.filter(todo => todo != item)
            }
        })
    }

    render() {
        return (
            <td>
                <section>{this.props.day}</section>
                <input name='label' onChange={this.handleInput} value={this.state.input} /><button onClick={this.handleButton}>+</button>
                {this.state.todos.map(todo => {
                    return (
                        <ul>
                            <li key={todo}>{todo} <button onClick={() => this.handleRemove(todo)} >-</button></li>
                        </ul>
                    )
                })}
            </td>
        )
    }
}

export default Daily;