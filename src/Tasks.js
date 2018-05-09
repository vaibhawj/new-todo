import React from 'react';
import { Divider } from 'material-ui';
import Task from './Task';

class Tasks extends React.Component {

    render() {
        const tasks = this.props.tasks.map((task, i) => {
            return (
                <div>
                    <Task task={task} key={`task-${i}`}/>
                    <Divider key={`div-${i}`}/>
                </div>
            )
        });
        return tasks;
    }
}

export default Tasks;