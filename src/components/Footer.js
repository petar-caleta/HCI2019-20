import React from "react"
import "../styles/global.css"

const Footer = () => 
<footer className="text-center">
    <div className="footer-above">
        <div className="container">
            <div class="row">
                <div className="footer-col col-md-4">
                    <h3>Location</h3>
                    <p>3481 Melrose Place<br/>Beverly Hills, CA 90210 </p>

                </div>
                <div className="footer-col col-md-4">
                    <h3>Around the Web</h3>
                    <ul className="list-inline">
                    </ul>
                </div>
                <div class="footer-col col-md-4">
                    <h3>About Freelancer</h3>
                    <p>Freelance is a free to use, open source Bootstrap theme created by <a href="http://startbootstrap.com">Start Bootstrap</a>.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-below">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    Copyright &copy; Author 
                </div>
            </div>
        </div>
    </div>
</footer>

export default Footer