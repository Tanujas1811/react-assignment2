import React, {Component} from 'react'
import Main1 from './components/Main1'

import './App.css';
class App extends Component{
  constructor(props){
      super(props)
      this.state={
          activetab:''
      }
  }
  tab1=()=>{
      console.log('tab1')
      this.setState({
          activetab:'tab1'
      })
  }
  tab2(){
      console.log('tab2')
      this.setState({
         activetab: 'tab2'
      })
  }
  tab3(){
      console.log('tab3')
      this.setState({
         activetab:'tab3'
      })
  }
  tab4(){
    console.log('tab4')
    this.setState({
       activetab:'tab4'
    })
}
tab5(){
    console.log('tab5')
    this.setState({
       activetab:'tab5'
    })
}
  render(){
    console.log(this.state)
      return(
          <div className="App"><br/><br/><br/>
              <button onClick={this.tab1}>List</button>&nbsp;&nbsp;
              <button onClick={() => this.tab2()}>Table</button>&nbsp;&nbsp;
              <button onClick={() => this.tab3()}>Form</button>&nbsp;&nbsp;<br/><br/>
              <button onClick={() => this.tab4()}>Stopwatch</button>&nbsp;&nbsp;
              <button onClick={() => this.tab5()}>Countdown</button>&nbsp;&nbsp;
              <Main1 activetab={this.state.activetab}/>
          </div>
      )
  }
}

export default App;
