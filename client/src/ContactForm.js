import React, { Component } from 'react'

export default class ContactForm extends Component {
    state = {
      email: '',
      contactdata: ''
    }

    onSubmit = (e) => {
      e.preventDefault()
      //
      window.fetch('/get-contact-by-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      })
        .then(response => response.json())
        .then(contactdata => this.setState({ contactdata: contactdata }))
        //
      console.log(this.state)
    }

    render () {
      return (
        <form>
          <input
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            type='email'
            name='email'
            required placeholder='email'
          />
          <button onClick={(e) => this.onSubmit(e)} type='submit'>Submit</button>
          <ul>
            <li>VID: {JSON.stringify(this.state.contactdata.vid, null, 2)}</li>
          </ul>

          <div>
            {this.state.contactdata.properties
              ? <p>{JSON.stringify(this.state.contactdata.properties.firstname.value, null, 2)}</p>
              : <p>awaiting data</p>}
          </div>
        </form>
      )
    }
}
