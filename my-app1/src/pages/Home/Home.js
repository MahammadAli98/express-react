import React from 'react';
import "./Home.css"
import Header from "../../components/Header/Header"

class Home extends React.Component {
    state = {
        active: "name",
        name: { label: "Hi, My name is", value: "Ethan Gomez" },
        email: { label: "My email address is", value: "ethan.gomez@example.com" }
    }
    render() {
        return (
            <div>
                <Header />
                <div>
                    <h2>{this.state[this.state.active].label}</h2>
                    <h1>{this.state[this.state.active].value}</h1>
                </div>
                <div>
                    <button onMouseEnter={() => this.setState({ active: "name" })}>Name</button>
                    <button onMouseEnter={() => this.setState({ active: "email" })}>Email</button>
                </div>
            </div>
        )
    }
}
export default Home