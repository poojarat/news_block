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
    console.log(this.state.input)
  }

  render(){
    console.log(this.props)
    return(
<<<<<<< HEAD
      <form>
        <input type="text" name="search" placeholder="Search.." id="resize" onSubmit={this.handleSubmit}/>
=======
      <form id="resize" onSubmit={this.handleSubmit} autoComplete="off"> 
        <input id="navsrch" type="search" onChange={this.handleChange} />
        <i className="fa fa-search"></i>
>>>>>>> 9841e2e2782261d979dafb569259617a9ecfeddb
      </form>
    )
  }
}

export default SearchBar
