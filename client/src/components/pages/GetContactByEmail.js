import React, { Component } from "react"
import ContactForm from "../molecules/ContactForm"

export default class GetContactByEmail extends Component {

    state = {
        fields: {}
    }

    onSubmit = (fields) => {
        this.setState({ fields })
        console.log("Fields: ", fields)
    }

    render() {
        return (
            <div>
                <h2>Enter Email</h2>
                <ContactForm onSubmit={fields => this.onSubmit(fields)} />
                <p>{JSON.stringify(this.state.fields, null, 2)}</p>
            </div>
        );
    }
}