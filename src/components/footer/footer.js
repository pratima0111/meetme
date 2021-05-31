import React, {Component } from 'react';
export default class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <footer>

                <section id="footer">

                    <div className="row section-head">
                        <div className="twelve columns">
                        <ul className="social-links">
                            {/* <li><a href="#"><i className="fa fa-facebook" /></a></li> */}
                            <li><a href="https://twitter.com/pratima_singh__"><i className="fa fa-twitter" /></a></li>
                            <li><a href="https://mailto:pratimasingh160101@gmail.com"><i className="fa fa-envelope" /></a></li>
                            <li><a href="https://linkedin.com/in/pratima-singh-3753481aa"><i className="fa fa-linkedin" /></a></li>
                            <li><a href="https://www.instagram.com/pratima_singh15/?hl=en"><i className="fa fa-instagram" /></a></li>

                            <li><a href="https://github.com/pratima0111"><i className="fa fa-github" /></a></li>
                            {/* <li><a href="#"><i className="fa fa-skype" /></a></li> */}
                        </ul>
                        <ul className="copyright">
                            {/* <li>© Copyright 2014 CeeVee</li> */}
                            <li>Designed with <i className="fa fa-heart-o"></i> by Pratima</li>   
                        </ul>
                        </div>
                        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                    </div>
                </section>
                </footer>

            </React.Fragment>
        );
    }
}








// var NewComponent = React.createClass({
//     render: function() {
//       return (
  

//       );
//     }
//   });