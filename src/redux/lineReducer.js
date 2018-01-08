
var lineData = {
    "page": null,  
    "team": null,
    "value": null,
    "lineChart":
      [
        {name: 'Page A', team_a: 4000, team_b: 2400, team_c: 1400},
        {name: 'Page B', team_a: 2800, team_b: 1398, team_c: 1800},
        {name: 'Page C', team_a: 3000, team_b: 9800, team_c: 2450},       
      ]
  }
  
  const lineGraph = function(state = lineData, action){
    switch(action.type) {
       case "SET_LINE_GRAPH_VALUE":
          let aIndex = null;
           //let obj = null;
           for(let x = 0; x < state.lineChart.length; x++) {             
            if(state.lineChart[x].name === state.page) {
                aIndex = x;
            }           
           }

           let dual = state.lineChart.map(item=>item);
           let newObjA = null;
            if(aIndex != null) {
              newObjA = [{ ...state.lineChart[aIndex], [state.team]: parseInt(state.value) }];  
              dual = dual.slice(0,aIndex).concat(dual.slice(aIndex+1,dual.length)).concat(newObjA);
             
            }             
         
         return {...state, "lineChart": dual}
  
       case "SETTING_UPDATE_LINE_OBJ":
         
         let name = action.name;
         let value = action.value;        
            
         var obj = {...state, [name]: value };      
         return obj;
  
       
       default:
         return state;
    }
  
  }
  
  export default lineGraph