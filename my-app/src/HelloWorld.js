import React from 'react'; 

//es6寫法
class HelloWorld extends React.Component {
  constructor(){ 
    super()
  }
  render() {
    return (
      <div>
        <h1>
					{this.props.text}
				</h1>
        <button 
          onClick={ () => { alert('Hello') }}
        > 
          {this.props.buttonText}
        </button>
      </div>
    );
  }
}
/* 函式型寫法
function Helloworld(props){
	return (
		 <div>
        <h1>
					{props.text}
				</h1>
        <button 
          onClick={ () => { alert('Hello') }}
        > 
          {props.buttonText}
        </button>
      </div>
	)
}
*/
export default HelloWorld;
