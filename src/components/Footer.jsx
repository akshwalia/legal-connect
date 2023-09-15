import logo from "../assets/images/ministryLogo.png";

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Company Logo" />
                </div>
                <div className="footer-info">
                    <h3>Contact Us</h3>
                    <p>Green Park, New Delhi</p>
                    <p>Delhi, India</p>
                    <p>Email: contact@legalservices.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <a href="#" className="social-icon" />
                    <a href="#" className="social-icon" />
                    <a href="#" className="social-icon" />
                </div>
            </div>
            <div className="footer-bottom">
                © 2023 Legal Services. All rights reserved.
            </div>
        </footer>

    )
}