import React, { Component } from 'react'
import styled from 'styled-components/macro';

const Form = styled.form`
    display: flex;
    flex-align: center;
    border: 2px solid red;
    transition: 2s all;
`


export default class ContactForm extends Component {
    state = {
        email: '',
        firstname: ''
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
        //console.log(this.state)
        fetch(`/get-contact-by-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(response => response.JSON)
        .then(firstname => this.setState({firstname: firstname}))
        console.log(this.state)
    }

    render() {
        return(
            <Form>
                <input 
                    value={this.state.email}
                    onChange={e => this.setState({email: e.target.value})}
                    type="email"
                    name="email"
                    required placeholder="email" />
                <button onClick={(e) => this.onSubmit(e)} type="submit">Submit</button>
                <p posts={this.state.firstname}>{JSON.stringify(this.state.firstname, null, 2)}</p>
            </Form>
        )
    }
}

{/* action="/get-contact-by-email" method="POST" */}