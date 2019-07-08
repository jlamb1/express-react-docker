import React, { Component } from 'react'

export default class ContactForm extends Component {
    state = {
        email: ''
    }

    onSubmit = () => {
        console.log(this.state)
    }

    render() {
        return(
            <form>
                <input 
                    value={this.state.email}
                    onChange={e => this.setState({email: e.target.value})}
                    type="email"
                    name="email"
                    required placeholder="email" />
                <button onClick={() => this.onSubmit()} type="submit">Submit</button>
            </form>
        )
    }
}

{/* action="/get-contact-by-email" method="POST" */}