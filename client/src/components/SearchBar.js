import React from 'react'

class SearchBar extends React.Component {
  state = {
    input: ""
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({ input: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.getNews(this.state.input)
  }

  render(){
    return(
      <form id="resize" onSubmit={this.handleSubmit} autoComplete="off" className={this.state.input ? "filled" : ""}>
        <input id="navsrch" type="text" onChange={this.handleChange}/>
        <i className="fa fa-search"></i>
      </form>
    )
  }
}

export default SearchBar
