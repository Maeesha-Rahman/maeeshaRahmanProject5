import React from 'react';
import '../styles/Footer.css'

function Footer(props) {
    return (
        <div className="footerComponent">
        {
            <footer className="footer">
                <div className="wrapper">
                    <p>Data provided by The Movie Database API.</p>
                </div>
            </footer>
        }
        </div>
    );
};

export default Footer;