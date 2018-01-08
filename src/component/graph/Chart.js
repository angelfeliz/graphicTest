import React, {Component} from 'react';
import { connect } from 'react-redux';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  }, 
};
/*var chartData = [
        {name: 'Page A', team_a: 4000, team_b: 2400, amt: 2400},
        {name: 'Page B', team_a: 3000, team_b: 1398, amt: 2210},
        {name: 'Page C', team_a: 2000, team_b: 9800, amt: 2290},
        {name: 'Page D', team_a: 2780, team_b: 3908, amt: 2000},
        {name: 'Page E', team_a: 1890, team_b: 4800, amt: 2181},
        {name: 'Page F', team_a: 2390, team_b: 3800, amt: 2500},
        {name: 'Page G', team_a: 3490, team_b: 4300, amt: 2100},
]*/

class Chart extends Component {
  constructor(props) {
    super(props);
    
  }

  onHandleChangePageTeamA = (event, index, value) => {   
    this.props.onHandleChangePage("pageTeamA",value);
  }
  onHandleChangePageTeamB = (event, index, value) => {   
    this.props.onHandleChangePage("pageTeamB",value);
  }
  onChangeText = (e) => {   
    this.props.onHandleChangePage(e.target.name, e.target.value);
  }
  onClickSet = () => {
    this.props.onClickSet();
  }



  render() {    
    return(  
      <div className="flex_row_container">
        <BarChart width={600} height={300} data={this.props.chartBar.dualChart}
          margin={{top: 20, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8"/>
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d"/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Bar yAxisId="left" dataKey="team_a" fill="#8884d8" />
         <Bar yAxisId="right" dataKey="team_b" fill="#82ca9d" />
        </BarChart>   
        <div className="flex_col_container">        
          <div>            
          <SelectField         
          floatingLabelText="Select a Page"
          value={this.props.chartBar.pageTeamA}
          onChange={this.onHandleChangePageTeamA}
           >  
          <MenuItem value={null} primaryText="" />        
          <MenuItem value={"Page A"} primaryText="Page A" />
          <MenuItem value={"Page B"} primaryText="Page B" />
          <MenuItem value={"Page C"} primaryText="Page C" />         
        </SelectField>
        </div>
          <div>
          <TextField
             name="teamAvalue"             
             hintText="team A"
             onChange={this.onChangeText}
           />
           </div>
           
           <div>             
          <SelectField
          floatingLabelText="Select a Page"
          value={this.props.chartBar.pageTeamB}
          onChange={this.onHandleChangePageTeamB}
        >  
          <MenuItem value={null} primaryText="" />        
          <MenuItem value={"Page A"} primaryText="Page A" />
          <MenuItem value={"Page B"} primaryText="Page B" />
          <MenuItem value={"Page C"} primaryText="Page C" />         
        </SelectField>
        </div>
        <div>
         <TextField      
           name="teamBvalue"   
           hintText="team B"
           onChange={this.onChangeText}
         />
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
      </div>       
    )
  }      
 }

 const  mapStateToProps = (state) => {
  return { chartBar: state.chartBar };
 }

const mapStateToDispatch = (dispatch) => {
 return {
  onHandleChangePage: (name,value) => {
    dispatch({
      type: "SETTING_UPDATE_OBJ",    
      name,  
      value
    })
  },
  onClickSet: () => {
    dispatch({
      type: "SET_GRAPH_VALUE",      
    })
  } 
 }
}

 Chart = connect(mapStateToProps, mapStateToDispatch)(Chart);

 export default Chart;