import React from 'react';
import "./About.css"
import Header from '../../components/Header/Header';

class About extends React.Component {
    render() {
        return (
            <div className="Abouts">
                <Header />
                <h1>About</h1>
                <div className="Abouttext">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi sint velit porro beatae ex nobis magni eveniet praesentium delectus voluptatum vel, doloribus consequuntur ea vero sunt dicta sit sed?
                    </p>
                </div>

            </div>
        );
    }
}

export default About;