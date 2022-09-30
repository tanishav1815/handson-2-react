import React, { Component } from 'react'
import './Style.css'

class App extends Component {

  state = {
    name: "",
    department: "",
    rating: "",
    Arr: [],
    show: false
  }

  handleChange = (event) => {
    console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  OnSubmit(event) {
    event.preventDefault();
    const Obj = {
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating
    }

    this.state.Arr.push(Obj)
    this.setState({
      name: "",
      department: "",
      rating: "",
      show: true

    })
    console.log(this.state.Arr)
  }

  render() {
    return (
      <>
        <div className='container'>
          <h1>EMPLOYEE FEEDBACK FORM</h1>
          <form action="">
            <label for="name">Name : </label>
            <input required type="text" id="name" value={this.state.name} name="name" onChange={this.handleChange} /><br></br>
            <label for="department">Department : </label>
            <input required type="text" id="department" value={this.state.department} name="department" onChange={this.handleChange} /><br></br>
            <label for="rating">Rating : </label>
            <input required type="number" id="rating" value={this.state.rating} name="rating" onChange={this.handleChange} /><br></br>

          </form>
          <button type="submit" onClick={this.OnSubmit.bind(this)}>Submit</button>
        </div>
        {this.state.show && <div className='EmploData'>
          {this.state.Arr.length > 0 && this.state.Arr.map((event) => {
            return (<div className='data'>
              <h1>{event.name} || {event.department} || {event.rating}</h1>
            </div>)
          })}
        </div>}
      </>
    )
  }
}

export default App