import {Component} from "react";
import './App.css';
class App extends Component{
  state={count:0}
  onperfect=()=>{
  this.setState((prev)=>({count:prev.count+1}));
  }
  nonperfect=()=>{
    // const {count}=this.state
    //  if(count>0){
    //  this.setState((prev)=>({count:prev.count-1}));
    //  }
    //  else{
    //   this.setState((prev)=>({count:prev.count}));
    //  }
    this.setState((prev)=>({count:prev.count-1}));
  }
  render(){
    const {count}=this.state
  return(
    <div className="container">
      <h1>The Button has been clicked  <span> {count}</span> times</h1>
      <p>bcdhvbfhvbfvbfbvf</p>
      <button type="button" onClick={this.onperfect}>Increase</button>
      <button type="button" onClick={this.nonperfect}>Decrease</button>
     
        {count>0 || count<0 ? (<button type="button">ReStart</button>):null }
      
      
    </div>

  )
}
}


export default App;
