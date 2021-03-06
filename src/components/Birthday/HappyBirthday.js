import React, { Component } from 'react'

export default class Happybirthday extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        return (
            <section className="container" >
            <div className="row">
              <div className="col-9 offset-6">
                <div className="card">
              <div className="card-body text-dark">
                <h1 className="text-center">Happy Birthday {this.props.match.params.name}!</h1>
                <p>Have a cracking birthday, full of madness and happy people to make it worth celebrating! Lots of love.</p>
              </div>
            </div>
              </div>
            </div>
          </section>
        )
    }
}
