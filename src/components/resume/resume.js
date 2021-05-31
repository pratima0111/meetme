import React, {Component} from 'react';
export default class Resume extends Component{
    render(){
        return(

            <React.Fragment>

                    <section id="resume">
                        {/* Education
                    ----------------------------------------------- */}
                        <div className="row education">
                            <div className="three columns header-col">
                                <h1><span>Education</span></h1>
                            </div>
                            <div className="nine columns main-col">
                                <div className="row item">
                                <div className="twelve columns">
                                    <h3>Zakir Husain College of Engineering & Technology</h3>
                                    <p className="info">Electronics Engineering <span>•</span> <em className="date">August 2019- Present</em></p>
                                    <p>
                                    At present in second year with an aggregate of 84% till second semester.
                                    </p>
                                </div>
                                </div> {/* item end */}
                                <div className="row item">
                                <div className="twelve columns">
                                    <h3>Senior Secondary School Girls, AMU</h3>
                                    <p className="info">Intermediate <span>•</span> <em className="date">March 2019</em></p>
                                    <p>
                                    I completed my schooling fromw with an aggregate of 92%.
                                    </p>
                                </div>
                                </div> {/* item end */}
                            </div> {/* main-col end */}
                        </div> {/* End Education */}
                        {/* Work
                    ----------------------------------------------- */}
                        <div className="row work">
                        <div className="three columns header-col">
                            <h1><span>Work</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                            <div className="twelve columns">
                                {/* <h3>Awesome Design Studio</h3> */}
                                <p className="info">No experience, hope to get one soon!<span></span> <em className="date"></em></p>
                            </div>
                            </div>
                                {/* <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                                </p>
                            </div>
                            
                            {/* <div className="row item">
                            <div className="twelve columns">
                                <h3>Super Cool Studio</h3>
                                <p className="info">UX Designer <span>•</span> <em className="date">March 2007 - February 2010</em></p>
                                <p>
                                This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                                ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                                </p>
                            </div>
                            </div> item end */} 
                        </div> {/* main-col end */}
                        </div> {/* End Work */}
                        {/* Skills
                    ----------------------------------------------- */}
                        <div className="row skill">
                        <div className="three columns header-col">
                            <h1><span>Skills</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <p>I know languages like Python, basics of C/C++, very little of JavaScript. Known to web-devlopment.
                            </p>
                            <div className="bars">
                            <ul className="skills">
                                <li><span className="bar-expand photoshop" /><em>Python</em></li>
                                <li><span className="bar-expand illustrator" /><em>C/C++</em></li>
                                {/* <li><span className="bar-expand wordpress" /><em></em></li> */}
                                <li><span className="bar-expand css" /><em>CSS</em></li>
                                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                                <li><span className="bar-expand jquery" /><em>ReactJs</em></li>
                            </ul>
                            </div>{/* end skill-bars */}
                        </div> {/* main-col end */}
                        </div> {/* End skills */}

                    
                    </section>
            </React.Fragment>

        );
    }
}