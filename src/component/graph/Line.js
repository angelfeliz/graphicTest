import React, {Component} from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

class LineGraph extends Component {
  constructor(props) {
    super(props);
  }
  

  onHandleChangeTeam = (event, index, value) => {
    this.props.onHandleChange("team",value);
  }
  onHandleChangePage = (event, index, value) => {
    this.props.onHandleChange("page",value);
  }
  onChangeText = (event) => {
    this.props.onHandleChange("value",event.target.value);
  }
  onClickSet = () => {
     this.props.onClickSet();
  }

  render() {     
  return(
    <div className="flex_row_container">
        <LineChart width={600} height={300} data={this.props.lineGraph.lineChart}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="team_a" stroke="#8884d8" activeDot={{r: 8}}/>
          <Line type="monotone" dataKey="team_b" stroke="#82ca9d" />
          <Line type="monotone" dataKey="team_c" stroke="#d7b7a9" />
        </LineChart>  
        <div className="flex_col_container">        
          <div>            
          <SelectField         
          floatingLabelText="Select a Team"
          value={this.props.lineGraph.team}
          onChange={this.onHandleChangeTeam}
           >  
          <MenuItem value={null} primaryText="" />        
          <MenuItem value={"team_a"} primaryText="Team A" />
          <MenuItem value={"team_b"} primaryText="Team B" />
          <MenuItem value={"team_c"} primaryText="Team C" />         
        </SelectField>
        </div>
        <div>            
          <SelectField         
          floatingLabelText="Select a Page"
          value={this.props.lineGraph.page}
          onChange={this.onHandleChangePage}
           >  
          <MenuItem value={null} primaryText="" />        
          <MenuItem value={"Page A"} primaryText="Page A" />
          <MenuItem value={"Page B"} primaryText="Page B" />
          <MenuItem value={"Page C"} primaryText="Page C" />         
        </SelectField>
        </div>
          <div>
          <TextField
             name="pageValue"             
             hintText="Value"
             onChange={this.onChangeText}
           />
        </div>  
        <div>
         <FlatButton            
      label="Set"
      secondary={true}
      icon={<FontIcon className="fa fa-handshake-o" />}
      onClick={this.onClickSet}
    />
         </div>
     </div> 
  </div>
      )
    }
  }

  const mapPropsToState = (state) => {    
    return {lineGraph: state.lineGraph}
  }

  const mapStateToDispatch = (dispatch) => {
    return {
      onHandleChange: (name,value) => {
       dispatch({
         type: "SETTING_UPDATE_LINE_OBJ",    
         name,  
         value
       })
     },
     onClickSet: () => {
       dispatch({
         type: "SET_LINE_GRAPH_VALUE",      
       })
     } 
    }
   }

   LineGraph = connect(mapPropsToState, mapStateToDispatch)(LineGraph)

export default LineGraph;