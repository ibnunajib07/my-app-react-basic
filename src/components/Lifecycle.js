import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class Lifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Najeeeb'
      }
      console.log('lifecycle constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('lifecycle getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('lifecycle componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('lifecycle shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('lifecycle getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('lifecycle componentDidUpdate')
    }

    changeState= () => {
        this.setState({
            name:'Codevolution'
        })
    }

  render() {
    console.log('lifecycle render')
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB/>
      </div>
      
    )
  }
}

export default Lifecycle