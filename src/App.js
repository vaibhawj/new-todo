import React from 'react';
import './App.css';
import {
  MuiThemeProvider, TextField,
  FloatingActionButton, List, AppBar
} from 'material-ui';
import { Add } from 'material-ui-icons';
import Tasks from './Tasks';

class App extends React.Component {

  handleBtnClick() {
    if (!this.state.taskInput) return;
    const tasks = this.state.tasks;
    tasks.push(this.state.taskInput);
    this.setState({
      tasks,
      taskInput: ''
    })
  }

  handleTxtChange(e) {
    this.setState({
      taskInput: e.target.value,
    })
  }

  constructor() {
    super();
    this.state = {
      taskInput: '',
      tasks: []
    }
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleTxtChange = this.handleTxtChange.bind(this);
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <header className="App-header">
            <AppBar title="TODOs" />
            </header>
            <div className="App-intro">
              <TextField onChange={this.handleTxtChange} value={this.state.taskInput} id="text-input" />
              <FloatingActionButton onClick={this.handleBtnClick} mini={true}>
                <Add />
              </FloatingActionButton>
              <List className="tasks">
                <Tasks tasks={this.state.tasks} />
              </List>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
