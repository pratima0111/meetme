import React, {Component} from 'react';
export default class Portfolio extends Component{
    render(){
        return(

                        <React.Fragment>
                            <section id="portfolio">
                                    <div className="row">
                                    <div className="twelve columns collapsed">
                                        <h1>Check Out Some of My Works.</h1>
                                        {/* portfolio-wrapper */}
                                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                        <div className="columns portfolio-item">
                                            <div className="item-wrap">
                                            <a href="#modal-01" title>
                                                <img alt="" src="images/portfolio/port-01.png" />
                                                <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Covid-tracker</h5>
                                                    <p>Web-development</p>
                                                </div>
                                                </div>
                                                <div className="link-icon"><i className="icon-plus" /></div>
                                            </a>
                                            </div>
                                        </div> {/* item end */}
                                        <div className="columns portfolio-item">
                                            <div className="item-wrap">
                                            <a href="#modal-02" title>
                                                <img alt="" src="images/portfolio/port-02.png" />
                                                <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Tetris-game</h5>
                                                    <p>JavaScript</p>
                                                </div>
                                                </div>
                                                <div className="link-icon"><i className="icon-plus" /></div>
                                            </a>
                                            </div>
                                        </div> {/* item end */}
                                        <div className="columns portfolio-item">
                                            <div className="item-wrap">
                                            <a href="#modal-03" title>
                                                <img alt="" src="images/portfolio/port-03.png" />
                                                <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Background Generator</h5>
                                                    <p>Webdesign</p>
                                                </div>
                                                </div>
                                                <div className="link-icon"><i className="icon-plus" /></div>
                                            </a>
                                            </div>
                                        </div> {/* item end */}
                                        <div className="columns portfolio-item">
                                            <div className="item-wrap">
                                            <a href="#modal-04" title>
                                                <img alt="" src="images/portfolio/port-04.png" />
                                                <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Weather App: Air quality measure</h5>
                                                    <p>Python-Tkinter</p>
                                                </div>
                                                </div>
                                                <div className="link-icon"><i className="icon-plus" /></div>
                                            </a>
                                            </div>
                                        </div> {/* item end */}
                                        <div className="columns portfolio-item">
                                            <div className="item-wrap">
                                            <a href="#modal-05" title>
                                                <img alt="" src="images/portfolio/port-05.png" />
                                                <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Calculator</h5>
                                                    <p>Python-Tkinter</p>
                                                </div>
                                                </div>
                                                <div className="link-icon"><i className="icon-plus" /></div>
                                            </a>
                                            </div>
                                        </div> {/* item end */}
                                        <div className="columns portfolio-item">
                                            <div className="item-wrap">
                                            <a href="#modal-06" title>
                                                <img alt="" src="images/portfolio/port-07.png" />
                                                <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Create music with one tap</h5>
                                                    <p>Web-development</p>
                                                </div>
                                                </div>
                                                <div className="link-icon"><i className="icon-plus" /></div>
                                            </a>
                                            </div>
                                        </div> {/* item end */}
                                        <div className="columns portfolio-item">
                                            <div className="item-wrap">
                                            <a href="#modal-07" title>
                                                <img alt="" src="images/portfolio/port-08.png" />
                                                <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Clock</h5>
                                                    <p>Web-development</p>
                                                </div>
                                                </div>
                                                <div className="link-icon"><i className="icon-plus" /></div>
                                            </a>
                                            </div>
                                        </div> {/* item end */}
                                        {/* <div className="columns portfolio-item">
                                            <div className="item-wrap">
                                            <a href="#modal-08" title>
                                                <img alt="" src="images/portfolio/retrocam.jpg" />
                                                <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Retrocam</h5>
                                                    <p>Web Development</p>
                                                </div>
                                                </div>
                                                <div className="link-icon"><i className="icon-plus" /></div>
                                            </a>
                                            </div>
                                        </div>  item end */}
                                        </div> {/* portfolio-wrapper end */}
                                    </div> {/* twelve columns end */}
                                    {/* Modal Popup
                                    --------------------------------------------------------------- */}
                                    <div id="modal-01" className="popup-modal mfp-hide">
                                        <img className="scale-with-grid" src="images/portfolio/modals/port-01.png" alt="" />
                                        <div className="description-box">
                                        <h4>Covid-Tracker</h4>
                                        <p>This is a Covid-Stats Application. It is build with React in addition withn Chart.js, Material UI, and many different modules. The data is fetched from the API and cards display the statistics as well as Charts. </p>
                                        <span className="categories"><i className="fa fa-tag" />Web-App</span>
                                        </div>
                                        <div className="link-box">
                                        <a href="http://pratima0111.github.io/covid-tracker/">View</a>
                                        <a className="popup-modal-dismiss">Close</a>
                                        </div>
                                    </div>{/* modal-01 End */}
                                    <div id="modal-02" className="popup-modal mfp-hide">
                                        <img className="scale-with-grid" src="images/portfolio/modals/port-02.png" alt="" />
                                        <div className="description-box">
                                        <h4>Tetris-Basic</h4>
                                        <p>This is a very basic version of Tetris with minimal styling, I made it while learning JavaScript from youtube. It covers basic JavaScript methods like addEventListener(), querySelector(), keyCode(), Math.floor(), length, forEach(), splice(), setInterval(), clearInterval()
                                        , some(), innerHTML, every(), add(), remove(), etc.</p>
                                        <span className="categories"><i className="fa fa-tag" />HTML, CSS, Javascript</span>
                                        </div>
                                        <div className="link-box">
                                        {/* <a href="http://www.behance.net">Details</a> */}
                                        <a className="popup-modal-dismiss">Close</a>
                                        </div>
                                    </div>{/* modal-02 End */}
                                    <div id="modal-03" className="popup-modal mfp-hide">
                                        <img className="scale-with-grid" src="images/portfolio/modals/port-03.png" alt="" />
                                        <div className="description-box">
                                        <h4>Background-generator</h4>
                                        <p> A small app which can help you generate different background-gradients. Build with html, css and JavaScript only.</p>
                                        {/* <span className="categories"><i className="fa fa-tag" />Html, CSS, JavaScript</span> */}
                                        </div>
                                        <div className="link-box">
                                        {/* <a href="http://www.behance.net">Details</a> */}
                                        <a className="popup-modal-dismiss">Close</a>
                                        </div>
                                    </div>{/* modal-03 End */}
                                    <div id="modal-04" className="popup-modal mfp-hide">
                                        <img className="scale-with-grid" src="images/portfolio/modals/port-04.png" alt="" />
                                        <div className="description-box">
                                        <h4>Weather App: Air quality measure</h4>
                                        <p>Basic gui app made with Python-Tkinter, It fetches live weather data from a third party API, and then displays it on screen of gui.</p>
                                        {/* <span className="categories"><i className="fa fa-tag" />Python</span> */}
                                        </div>
                                        <div className="link-box">
                                        {/* <a href="http://www.behance.net">Details</a> */}
                                        <a className="popup-modal-dismiss">Close</a>
                                        </div>
                                    </div>{/* modal-04 End */}
                                    <div id="modal-05" className="popup-modal mfp-hide">
                                        <img className="scale-with-grid" src="images/portfolio/modals/port-05.png" alt="" />
                                        <div className="description-box">
                                        <h4>Calculator</h4>
                                        <p>GUI application built with Python-Tkinter. It can perform all basic mathematical opeations like addition, subtraction, division, multiplication, factorial and power of 2.</p>
                                        <span className="categories"><i className="fa fa-tag" />Python</span>
                                        </div>
                                        <div className="link-box">
                                        {/* <a href="http://www.behance.net">Details</a> */}
                                        <a className="popup-modal-dismiss">Close</a>
                                        </div>
                                    </div>{/* modal-05 End */}
                                    <div id="modal-06" className="popup-modal mfp-hide">
                                        <img className="scale-with-grid" src="images/portfolio/modals/port-07.png" alt="" />
                                        <div className="description-box">
                                        <h4>Create music with one tap</h4>
                                        <p>A beginner web-development project, I made following a tutorial on youtube. It involves implementation of an audio track
                                        and adding different sounds to it and then how to play sounds in JavaScript.</p>
                                        {/* <span className="categories"><i className="fa fa-tag" />Photography</span> */}
                                        </div>
                                        <div className="link-box">
                                        {/* <a href="http://www.behance.net">Details</a> */}
                                        <a className="popup-modal-dismiss">Close</a>
                                        </div>
                                    </div>{/* modal-06 End */}
                                    <div id="modal-07" className="popup-modal mfp-hide">
                                        <img className="scale-with-grid" src="images/portfolio/modals/port-08.png" alt="" />
                                        <div className="description-box">
                                        <h4>Analog clock</h4>
                                        <p>Again a beginner project for learning CSS and JavaScript. It teaches how to use absolute postion and transform in many different ways.                                        </p>
                                        {/* <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span> */}
                                        </div>
                                        <div className="link-box">
                                        {/* <a href="http://www.behance.net">Details</a> */}
                                        <a className="popup-modal-dismiss">Close</a>
                                        </div>
                                    </div>{/* modal-07 End */}
                                    {/* <div id="modal-08" className="popup-modal mfp-hide">
                                        <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt="" />
                                        <div className="description-box">
                                        <h4>Retrocam</h4>
                                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                                        <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
                                        </div>
                                        <div className="link-box">
                                        <a href="http://www.behance.net">Details</a>
                                        <a className="popup-modal-dismiss">Close</a>
                                        </div> */}
                                    {/* </div>modal-01 End */}
                                    </div> {/* row End */}
                            </section>
                        </React.Fragment>

        );
    }
}