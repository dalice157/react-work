//基本結構的寫法
import React, { Component } from 'react'; //{}為部份載入
import HelloWorld from './HelloWorld';
/*
import logo from './logo.svg';
import './App.css';
*/

class App extends React.Component {
  constructor(){ //建構子
    super()
  }
  render() {
    return (
      <div>
        <HelloWorld 
          text="Hello" 
          buttonText="React Button"
          msg="Hello!!"
        />
        <HelloWorld 
          text="您好" 
          buttonText="React按鈕"
          msg="哈囉！！"
        />
      </div>
    );
  }
}

export default App;
