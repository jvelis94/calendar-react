import React from 'react';
import logo from './logo.svg';
import './stylesheets/App.css';
import Monthly from './components/monthly.js'
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';
import Links from './components/links.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      months: [
        {
          name: 'January',
          days: 31
        },
        {
          name: 'February',
          days: 28
        },
        {
          name: 'March',
          days: 31
        },
        {
          name: 'April',
          days: 30
        },
        {
          name: 'May',
          days: 31
        },
        {
          name: 'June',
          days: 30
        },
        {
          name: 'July',
          days: 31
        },
        {
          name: 'August',
          days: 31
        },
        {
          name: 'September',
          days: 30
        },
        {
          name: 'October',
          days: 31
        },
        {
          name: 'November',
          days: 30
        },
        {
          name: 'December',
          days: 31
        }
      ],
      weekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' render={() => {
          return (
            <div>
              <h1>Home</h1>
              <Links months = {this.state.months} />
            </div>
          )
        }}
        />
        <div>
          {this.state.months.map(month => {
              return (
              
                <Route exact path={`/${month.name}`} render={() => {
                  return (
                      <div id='monthly-calendar'>
                        <div id='title-buttons'>
                            <h1>{month.name}</h1>
                            <div id='buttons' style={{display: 'inline'}}>
                                <button onClick={this.handleLeftButtonClick}> &larr; </button>
                                <button onClick={this.handleRightButtonClick}> &rarr; </button>
                            </div>
                        </div>
                        
                        <table>
                            <thead>
                                <tr>
                                    {this.state.weekDays.map(day => {
                                        return <td key={day}>{day}</td>
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                              <Monthly month = {month.name} numberOfDays = {month.days} />
                            </tbody>
                        </table>
                        <Links months = {this.state.months} />
                      </div>
                    )
                  }} 
                />
              
            ) 
          })}
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
