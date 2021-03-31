import React from "react";
import List from './List1';
import Table1 from './Table1';
import Form1 from './Form1';
import Stopwatch from './Stopwatch';
import './style1.css';
import Countdown from "./Countdown";
const Main1 = props => {
  const {activetab} = props;
    console.log(activetab)
  switch (activetab) {
    case 'tab1':
      return <List/>;
    case 'tab2':
      return <Table1/>;
    case 'tab3':
        return <Form1/>;
    case 'tab4':
        return <div class="stop"> <Stopwatch/></div>;
    case 'tab5':
          return <div class="stop"> <Countdown/></div>;
 
    default:
      return null;
  }
}

export default Main1