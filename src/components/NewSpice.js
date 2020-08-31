import React from 'react'

class NewSpice extends React.Component {
  state = {
    title: "",
    image: "",
    notes: "",
    description: "",
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addNewSpice(this.state);
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="card">
        <h2>New Spice</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" onChange={this.handleInputChange} />
          <label htmlFor="image">Image URL: </label>
          <input type="text" name="image" onChange={this.handleInputChange} />
          <label htmlFor="notes">Tasting Notes: </label>
          <input type="text" name="notes" onChange={this.handleInputChange} />
          <label htmlFor="notes">Description: </label>
          <textarea type="text" name="description" onChange={this.handleInputChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewSpice