
var chartData = {
  "pageTeamA": null,
  "pageTeamB": null,
  "teamAvalue": null,
  "teamBvalue": null,
  "dualChart":
      [
        {name: 'Page A', team_a: 4000, team_b: 2400},
        {name: 'Page B', team_a: 3000, team_b: 1398},
        {name: 'Page C', team_a: 2000, team_b: 9800},        
      ]
}

const chartBar = function(state = chartData, action){
  switch(action.type) {
     case "SET_GRAPH_VALUE":
        let aIndex = null, bIndex = null;        
         let obj = null;
         for(let x = 0; x < state.dualChart.length; x++) {
           
          if(state.dualChart[x].name === state.pageTeamA) {
              aIndex = x;
          }
          if(state.dualChart[x].name === state.pageTeamB) {
            bIndex = x;
          }
         }
         console.log('index ',aIndex,bIndex);
         let newObj = null;
         let dual = state.dualChart.map(item=>item);
         console.log('dual ', dual);
         if(aIndex === bIndex) {
            newObj = [{ ...state.dualChart[aIndex], team_a: parseInt(state.teamAvalue), team_b: parseInt(state.teamBvalue) }];
            dual = dual.slice(0,aIndex).concat(dual.slice(aIndex+1,dual.length)).concat(newObj);
            console.log('dual iqual ', dual);
         }
         else {
          let newObjA = null;
          let newObjB = null;
          if(aIndex != null) {
            newObjA = [{ ...state.dualChart[aIndex], team_a: parseInt(state.teamAvalue) }];  
            dual = dual.slice(0,aIndex).concat(dual.slice(aIndex+1,dual.length)).concat(newObjA);
            console.log('dual A ', dual);
          }
          if(bIndex != null) {
             newObjB =  [{ ...state.dualChart[bIndex], team_b: parseInt(state.teamBvalue) }]; 
             dual = dual.slice(0,bIndex).concat(dual.slice(bIndex+1,dual.length)).concat(newObjB);
             console.log('dual B ', dual);
          }          
         }        
         console.log(dual);
       return {...state, "dualChart": dual}

     case "SETTING_UPDATE_OBJ":
       
       let name = action.name;
       let value = action.value;        
          
       var obj = {...state, [name]: value };      
       return obj;

     case "UPDATE_VALUE":
       return {...state}
     default:
       return state;
  }

}

export default chartBar