import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }
    //bind in constructor
    // this.clickHandler = this.clickHandler.bind(this)
  }

//   clickHandler(){
//     this.setState({
//         message: 'Goodbye'
//     })
//     console.log(this)
//   }

    //bind classprop on arrow func
    clickHandler = () => {
        this.setState({
            message: 'Goodbye'
        })
    }
  
    render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* bind in render */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */} 
        {/* arrow func in render */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind