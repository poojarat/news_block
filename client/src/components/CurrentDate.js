import React from 'react';


    class CurrentDate extends React.Component {
      state = { time: new Date().toDateString() }

      componentDidMount(){
          this.interval = setInterval(this.checkTime, 500)
      }

      componentWillUount(){
          clearInterval(this.interval)
      }

      checkTime = () => {
          this.setState({ time: new Date().toDateString() })
      }

      render(){
        return(
          <h1 className="clockstyles">{this.state.time}</h1>
        )
      }
    }

export default CurrentDate;
