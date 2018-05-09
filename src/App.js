import React from 'react';
import logo from './logo.png';
import './App.css';
import {
  MuiThemeProvider, TextField,
  FloatingActionButton
} from 'material-ui';
import { Add } from 'material-ui-icons';
import Tasks from './Tasks';

class App extends React.Component {

  handleBtnClick() {
    if(!this.state.taskInput) return;
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
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">TODOs</h1>
          </header>
          <div className="App-intro">
            <TextField onChange={this.handleTxtChange} value={this.state.taskInput} />
            <FloatingActionButton onClick={this.handleBtnClick} mini={true}>
              <Add />
            </FloatingActionButton>
            <ul className="tasks">
              <Tasks tasks={this.state.tasks} />
            </ul>
          </div>

        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
