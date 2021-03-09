import React, {Component} from 'react';

import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'

import {fetchData} from './api/index'

import styles from './App.module.css'
class App extends Component{
  
  async componentDidMount(){
    const data = await fetchData();
  }
  render(){
    return(
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;