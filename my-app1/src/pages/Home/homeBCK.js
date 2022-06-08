import React from 'react';
import "./Home.css"
import Header from "../../components/Header/Header"

class Home extends React.Component {
    state = {
        active: "",
        img: ["red", "yellow", "purple", "black", "orange", "darkgreen"]
    }
    render() {
        return (
            <div>
                <Header />
                <div>
                    <ul>
                        {this.state.img.map((item, index) => {
                            return (
                                <li className="lists" style={{ color: this.state.active === item ? "#fff" : "#000" }} key={index} onClick={() => { this.setState({ active: item }) }} > {item}</li>
                            )
                        })}
                    </ul>
                    <div className="sekilolacaq" style={{ backgroundColor: this.state.active ? this.state.active : "gold" }}></div>

                </div>


            </div>
        )
    }
}
export default Home