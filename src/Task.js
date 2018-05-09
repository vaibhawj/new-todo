import React from 'react';
import {ListItem} from 'material-ui';

class Task extends React.Component {

    handleClick() {
        this.setState({
            completed: !this.state.completed
        })
    }

    constructor() {
        super();
        this.state = {
            completed: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const style=this.state.completed ? {'textDecoration': 'line-through'} : null;
        return (
            <ListItem key={`t-${this.props.id}`} primaryText={this.props.task}
                onClick={this.handleClick} style={style}
            />
        )
    }
}

export default Task;