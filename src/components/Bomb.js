import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super()

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render(){
    const bombTime = this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'
    return (
      <div>{bombTime}</div>
    )
  }
}

export default Bomb
