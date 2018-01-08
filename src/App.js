import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './component/graph/Chart';
import LineGraph from './component/graph/Line';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReducer from './redux/mainReducer';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(mainReducer)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <MuiThemeProvider>
        <Tabs>
          <Tab label="ChartBar" >
            <Chart/>  
         </Tab>
         <Tab label="Line" >
            <LineGraph/>
         </Tab>
       </Tabs>
       </MuiThemeProvider>
      </div>
      </Provider>
    );
  }
}

export default App;
