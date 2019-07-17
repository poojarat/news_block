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
      <form>
        <input type="text" name="search" placeholder="Search.." id="resize" onSubmit={this.handleSubmit}/>
      </form>
    )
  }
}

export default SearchBar
