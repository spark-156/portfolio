import React from 'react';

import { Spin, Space } from 'antd';
import { InstagramOutlined, GithubOutlined, MailOutlined, LinkedinOutlined } from '@ant-design/icons';

import './Contact.css';
import './Loading.css';

export default function Contact({ loading, setLoading }) {



    return loading ? <Spin id="loading" /> : (
        <section id="contactPage">
                <Space id="contactContainer" direction="vertical" size="large" >
                    {/* Change email address to a custom one */}
                    <div className="contactDetails"><MailOutlined /> <a className="contactLink" href="mailto:lucabergman@hotmail.nl" target="_blank" rel="noreferrer">lucabergman@hotmail.com</a></div> 
                    <div className="contactDetails"><GithubOutlined /> <a className="contactLink" href="https://github.com/spark-156" target="_blank" rel="noreferrer">github</a></div>
                    <div className="contactDetails"><LinkedinOutlined /> <a className="contactLink" href="https://www.linkedin.com/in/luca-bergman-30b28b203/" target="_blank" rel="noreferrer">LinkedIn</a></div>
                    <div className="contactDetails"><InstagramOutlined /> <a className="contactLink" href="https://www.instagram.com/lucaisawesome_/" target="_blank" rel="noreferrer">Instagram</a></div>
                </Space>
        </section>
    )
}
