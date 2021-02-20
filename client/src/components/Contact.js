import React from 'react';

import { InstagramOutlined, GithubOutlined, MailOutlined, LinkedinOutlined } from '@ant-design/icons';

import './Contact.css';

export default function Contact() {
    return (
        <section id="contact" className="blackBorder">
            {/* Change email address to a custom one */}
            <div id="contactCenter">
                <div className="contactDetails"><MailOutlined /> <a className="contactLink" href="mailto:" target="_blank" rel="noreferrer">Email</a></div>
                <div className="contactDetails"><GithubOutlined /> <a className="contactLink" href="https://github.com/spark-156" target="_blank" rel="noreferrer">github</a></div>
                <div className="contactDetails"><LinkedinOutlined /> <a className="contactLink" href="https://www.linkedin.com/in/luca-bergman-30b28b203/" target="_blank" rel="noreferrer">LinkedIn</a></div>
                <div className="contactDetails"><InstagramOutlined /> <a className="contactLink" href="https://www.instagram.com/lucaisawesome_/" target="_blank" rel="noreferrer">Instagram</a></div>
            </div>
        </section>
    )
}
