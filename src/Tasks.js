import React from 'react';

class Tasks extends React.Component {
    render() {
        const tasks = this.props.tasks.map((task, i) => {
            return <li key={`t-${i}`}>{task}</li>
        });
        return tasks;
    }
}

export default Tasks;