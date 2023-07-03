import React, { Component } from 'react';
import style from './SocialMedia.module.css';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

class Socialmedia extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <div className={style.container}>
                    <FaTwitter  size='20px'/>
                    <FaInstagram size='20px'/>
                    <FaFacebook size='20px'/>
                </div>
            </>
        );
    }
}

export default Socialmedia;