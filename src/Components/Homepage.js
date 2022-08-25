import React from 'react';
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptoQuery } from '../services/CryptoAPI';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';

function Homepage(props) {

    const {data, isFetching} = useGetCryptoQuery(10);
    
    console.log(data)
    const stats = data?.data?.stats;


    if(isFetching){
        return 'Loading...'
    }

    return (
        <React.Fragment>
            <Typography.Title level={2} className='heading'>Global Crypto Stats</Typography.Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={stats.total}/></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(stats.totalExchanges)}/></Col>
                <Col span={12}><Statistic title="Total Marketcap" value={millify(stats.totalMarketCap)}/></Col>
                <Col span={12}><Statistic title="Total 24 Volume" value={millify(stats.total24hVolume)}/></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(stats.totalMarkets)}/></Col>

            </Row>
            <div className='home-heading-container'>
                <Typography.Title className='home-title' level={2}>Top 10 Cryptocurrencies</Typography.Title>
                <Typography.Title className='show-more' level={3}><Link to='/cryptocurrencies'>Show More</Link></Typography.Title>
            </div>
            <Cryptocurrencies simplified></Cryptocurrencies>
            <div className='home-heading-container'>
                <Typography.Title className='home-title' level={2}>Cryptocurrencies News</Typography.Title>
                <Typography.Title className='show-more' level={3}><Link to='/news'>Show More</Link></Typography.Title>
            </div>
            <News simplified></News>
        </React.Fragment>
    );
}

export default Homepage;