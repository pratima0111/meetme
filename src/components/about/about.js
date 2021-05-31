import React, {Component } from 'react';
export default class About extends Component{
    render(){
        return(
            <React.Fragment>

                <section id="about">
                    <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>I'm Pratima, sophomore in Electronics Engineering from ZHCET, AMU. I'm a simple mediocre girl. Though I code rarely:(  but I have tried my hands on front-end web-development and has been trying to learn 
                        code since past one year, still I suck in coding! Well, I hope to get better with time. Will write more about me since I'm still figuring out myself:) 
                        </p>
                        <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                            <span>Pratima Singh</span><br />
                            <span>Aligarh<br />
                                Uttar Pradesh, India
                            </span><br />
                            {/* <span>(123)456-7890</span><br /> */}
                            <span><i className="fa fa-envelope" />  pratimasingh160101@gmail.com</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                            <a href="https://drive.google.com/file/d/1obEbBQoLYmM_LTqApXa5OGo66UoVQDwU/view?usp=sharing" className="button"><i className="fa fa-download" />Download Resume</a>
                            </p>
                        </div>
                        </div> 
                    </div> 
                    </div>
                </section>
            </React.Fragment>

        );
    }
}