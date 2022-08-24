import React from 'react';
import { Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className='footer'>
            <Typography.Title style={{color: 'white'}} level={3}>CryptoVerse <br/>All Rights Reserved</Typography.Title>
            <Space>
                <Link to='/'>Home</Link>
                <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                <Link to='/exchange'>Exchange</Link>
                <Link to='/news'>News</Link>
            </Space>
        </footer>
    );
}

export default Footer;