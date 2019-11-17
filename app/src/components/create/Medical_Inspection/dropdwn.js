/* eslint-disable no-use-before-define */
import React,{Component} from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Container from "@material-ui/core/Container";
import Tab from "./table.js";
export default  class ComboBox extends Component {
     top100Films = [
        {title:"blood cancer",
         value:"bloodCancerFlag",
         value1:"bloodCancerParam"
         
       },
       {title:"lung cancer",
       value:"lungCancerFlag",
       value1:"lungcancerParam"
         
       },
       {title:"skin cancer",
       value:"skinCancerFlag",
        value1:"skinCancerParam" 
       },
       {title:"kidney failure",
       value:"kidneyFailureFlag",
        value1:"kidneyFailureParam"
       },
       {title:"stroke",
       value:"strokeFlag",
         value1:"strokeParam"
       },
       {title:"brain tumor",
       value:"brainTumorFlag",
        value1:"brainTumorParam" 
       }
       
       
        
       ];


state={
  details:{bloodCancerFlag:0,
    lungCancerFlag:0,
    skinCancerFlag:0,
    kidneyFailureFlag:0,
    strokeFlag:0,
    brainTumorFlag:0,
   
 
},
bloodCancerParam:[],
leukima:"",
tomography:"",

lungcancerParam:[],
Age:"",
Smoking_History:"",

skinCancerParam:[],
Color:"",
Asymmetry:"",

kidneyFailureParam:[],
ACR:"",
GFR:"",
strokeParam:[],
Vision:"",
BloodCount:"",
brainTumorParam:[],
Grade:"",
Boipsy:"",
currSelect:[]
}


handleBloodCancer=(e)=>{
    let x=[];
    let y1={leukima:this.state.leukima};
    let y2={tomography:this.state.tomography};
    x.push(y1);
    x.push(y2);
   
 

    this.setState({
        bloodCancerParam:x
    },()=>{console.log(this.state)})
}





handlelungCancer=(e)=>{
    let x=[];
    let y1={Age:this.state.Age};
    let y2={Smoking_History:this.state.Smoking_History};
    x.push(y1);
    x.push(y2);
   
 
 
     this.setState({
        lungcancerParam:x
     },()=>{console.log(this.state)})
 }



 handleskinCancer=(e)=>{
    let x=[];
    let y1={Color:this.state.Color};
    let y2={Asymmetry:this.state.Asymmetry};
    x.push(y1);
    x.push(y2);
   
 
 
     this.setState({
        skinCancerParam:x
     },()=>{console.log(this.state)})
 }







 handlekidneyFailure=(e)=>{
    let x=[];
    let y1={ACR:this.state.ACR};
    let y2={GFR:this.state.GFR};
    x.push(y1);
    x.push(y2);
   
 
 
     this.setState({
        kidneyFailureParam:x
     },()=>{console.log(this.state)})
 }




 handlestroke=(e)=>{
    let x=[];
    let y1={Vision:this.state.Vision};
    let y2={BloodCount:this.state.BloodCount};
    x.push(y1);
    x.push(y2);
   
 
     this.setState({
        strokeParam:x
     },()=>{console.log(this.state)})
 }



 handlebrainTumor=(e)=>{
    let x=[];
    let y1={Grade:this.state.Grade};
    let y2={Boipsy:this.state.Boipsy};
    x.push(y1);
    x.push(y2);
     this.setState({
        brainTumorParam:x
     },()=>{console.log(this.state)})
 }


addParams=(e)=>{
     this.setState({
         [e.target.name]:e.target.value
     })
}





handleDropDown=(e,val)=>{
if(val){
const x={...this.state.details} ;
for(let y in x){
    x[y]=0;
    if(val.value==y)
       x[y]=1;
}
  



let copy=[...this.state.currSelect,val.value1];
//  console.log(copy);
this.setState({
    details:x,
    currSelect:copy
},()=>{
    console.log(this.state);
})

}

else{
    const x={...this.state.details} ;
for(let y in x){
    x[y]=0;
   
}
  


this.setState({
    details:x,
   
},()=>{
    console.log(this.state);
})


}




}

render(){
let res=[];
if(this.state.currSelect.length!==0){

for(let x=0 ; x<this.state.currSelect.length;x++){
      var par=[],val=[];
        console.log(this.state[this.state.currSelect[x]]);

      
      if(this.state[this.state.currSelect[x]].length!=0){

      for(let z in (this.state[this.state.currSelect[x]])){ 
        for(let key in (this.state[this.state.currSelect[x]][z])){
         console.log(key + " hhoola");
             par.push(key);
             val.push(this.state[this.state.currSelect[x]][z][key]);           
       } 
      }



 res.push(<Tab key={x} heading={this.state.currSelect[x]} par1={par[0]} par2={par[1]}  val1={val[0]} val2={val[1]} ></Tab>);
    }

}   



}






    return (
        <Container>
             <Autocomplete
          id="combo-box-demo"
          options={this.top100Films}
          getOptionLabel={option => option.title}
          style={{ width: 600 }}
          onChange={this.handleDropDown}
          renderInput={params => (
            <TextField {...params}  label="Search Diseases" variant="outlined" fullWidth />
          )}



        />
   
  {  this.state.details.bloodCancerFlag?<Container>
      
    <Grid container>

    <Grid item xs={12}>
          <TextField
            id="filled-with-placeholder"
            label="leukima"
            placeholder="bloodCancer"
            fullWidth
            margin="normal"
            variant="filled"
            onChange={this.addParams}
            name="leukima"
            
           
          />
         
        </Grid>


        <Grid item xs={12}>
          <TextField
            id="filled-with-placeholder"
            label="tomography"
            placeholder="BloodCancer"
            fullWidth
            margin="normal"
            variant="filled"
            onChange={this.addParams}
            name="tomography"
          
           
          />
         
        </Grid>
        <Button
          variant="contained"
          style={{
            color: "white",
            width: "95%",
            backgroundColor: "#3D83E1",
            maxWidth: 350
          }}
          onClick={this.handleBloodCancer}
               
          
        
        >
         ADD
        </Button>

</Grid>




  </Container>:null

  }
{  this.state.details.lungCancerFlag?<Container>
      
      <Grid container>
  
      <Grid item xs={12}>
            <TextField
              id="filled-with-placeholder"
              label="Age"
              placeholder="lungCancerFlag"
              fullWidth
              margin="normal"
              variant="filled"
              onChange={this.addParams}
              name="Age"
              
             
            />
           
          </Grid>
  
  
          <Grid item xs={12}>
            <TextField
              id="filled-with-placeholder"
              label="Smoking_History"
              placeholder="lungCancerFlag"
              fullWidth
              margin="normal"
              variant="filled"
              onChange={this.addParams}
              name="Smoking_History"
            
             
            />
           
          </Grid>
  
  </Grid>
  
  <Button
          variant="contained"
          style={{
            color: "white",
            width: "95%",
            backgroundColor: "#3D83E1",
            maxWidth: 350
          }}
          onClick={this.handlelungCancer}
               
          
        
        >
         ADD
        </Button>
  
  
    </Container>

:null

}

{  this.state.details.skinCancerFlag?<Container>
      
      <Grid container>
  
      <Grid item xs={12}>
            <TextField
              id="filled-with-placeholder"
              label="Color"
              placeholder="skinCancerFlag"
              fullWidth
              margin="normal"
              variant="filled"
              onChange={this.addParams}
              name="Color"
              
             
            />
           
          </Grid>
  
  
          <Grid item xs={12}>
            <TextField
              id="filled-with-placeholder"
              label="Asymmetry"
              placeholder="skinCancerFlag"
              fullWidth
              margin="normal"
              variant="filled"
              onChange={this.addParams}
              name="Asymmetry"
            
             
            />
           
          </Grid>
  
  </Grid>
  
  <Button
          variant="contained"
          style={{
            color: "white",
            width: "95%",
            backgroundColor: "#3D83E1",
            maxWidth: 350
          }}
          onClick={this.handleskinCancer}
               
          
        
        >
         ADD
        </Button>
  
  
    </Container>

:null

}

{  this.state.details.kidneyFailureFlag?
    <Container>
      
      <Grid container>
  
      <Grid item xs={12}>
            <TextField
              id="filled-with-placeholder"
              label="ACR"
              placeholder="kidneyFailureFlag"
              fullWidth
              margin="normal"
              variant="filled"
              onChange={this.addParams}
              name="ACR"
              
             
            />
           
          </Grid>
  
  
          <Grid item xs={12}>
            <TextField
              id="filled-with-placeholder"
              label="GFR"
              placeholder="kidneyFailureFlag"
              fullWidth
              margin="normal"
              variant="filled"
              onChange={this.addParams}
              name="GFR"
            
             
            />
           
          </Grid>
  
  </Grid>
  
  <Button
          variant="contained"
          style={{
            color: "white",
            width: "95%",
            backgroundColor: "#3D83E1",
            maxWidth: 350
          }}
          onClick={this.handlekidneyFailure}
               
          
        
        >
         ADD
        </Button>
  
  
    </Container>

:null

}

{  this.state.details.strokeFlag?

<Container>
      
      <Grid container>
  
      <Grid item xs={12}>
            <TextField
              id="filled-with-placeholder"
              label="Vision"
              placeholder="strokeFlag"
              fullWidth
              margin="normal"
              variant="filled"
              onChange={this.addParams}
              name="Vision"
              
             
            />
           
          </Grid>
  
  
          <Grid item xs={12}>
            <TextField
              id="filled-with-placeholder"
              label="BloodCount"
              placeholder="strokeFlag"
              fullWidth
              margin="normal"
              variant="filled"
             onChange={this.addParams}
              name="BloodCount"
            
             
            />
           
          </Grid>

          
  
  </Grid>
  
  <Button
          variant="contained"
          style={{
            color: "white",
            width: "95%",
            backgroundColor: "#3D83E1",
            maxWidth: 350
          }}
          onClick={this.handlestroke}
               
          
        
        >
         ADD
        </Button>
  
  
    </Container>
:null

}

{  this.state.details.brainTumorFlag?

<Container>
      
      <Grid container>
  
      <Grid item xs={12}>
            <TextField
              id="filled-with-placeholder"
              label="Grade"
              placeholder="brainTumorFlag"
              fullWidth
              margin="normal"
              variant="filled"
              onChange={this.addParams}
              name="Grade"
              
             
            />
           
          </Grid>
  
  
          <Grid item xs={12}>
            <TextField
              id="filled-with-placeholder"
              label="Boipsy"
              placeholder="brainTumorFlag"
              fullWidth
              margin="normal"
              variant="filled"
              onChange={this.addParams}
              name="Boipsy"
            
             
            />
           
          </Grid>
  
  </Grid>
  
  <Button
          variant="contained"
          style={{
            color: "white",
            width: "95%",
            backgroundColor: "#3D83E1",
            maxWidth: 350
          }}
          onClick={this.handlebrainTumor}
               
          
        
        >
         ADD
        </Button>
   
  
    </Container>
:null

}
{/* <div style={{position:"relative",bottom:0}}> 

</div> */}
<Container style={{position:"fixed",top:500}}> 
{res}
</Container>




  



        </Container>
       
     
     
     

     
     
        );
}

  
}



