import React from 'react'
import './footer.css'
import { Copyright, Facebook, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src="" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minus alias suscipit ducimus quidem nostrum. Dolores amet consequatur laboriosam, non quis facilis recusandae dicta, repellendus, voluptatum esse sint similique tenetur veritatis culpa possimus quae ad sunt nisi error! Itaque eaque praesentium possimus pariatur ducimus beatae mollitia dolore temporibus at accusamus sed quam, nostrum sunt, id sit eos quo sequi nulla, nisi alias perferendis nobis corrupti saepe. Quisquam ratione soluta est!</p>
                    <div className="footer-social-icons">
                        <Facebook />
                        <Twitter />
                        <Linkedin />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivary</li>
                        <li>Privecy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-1234567890</li>
                        <li>v&m@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright"> Copyright 2025 <Copyright size={16} strokeWidth={2} /> v&m.com All Right Reserved </p>
        </div>
    )
}

export default Footer
