import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Typography } from "antd";

import { useGetCryptoQuery } from "../services/CryptoAPI";

function Cryptocurrencies(props) {
  const count = props.simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptoQuery(count);
  const coins = data?.data?.coins;

  if (isFetching) {
    return "Loading...";
  }

  const cryptoCoins = coins?.map((coin) => (
    <Col xs={24} sm={12} lg={6} key={coin.id} className="crypto-card">
      <Link to={`/crypto/${coin.id}`}>
        <Card
          title={`${coin.rank}. ${coin.name}`}
          extra={<img src={coin.iconUrl} className="crypto-image"></img>}
          hoverable
        >
          <p>Coin Price: {millify(coin.price)}</p>
          <p>Coin Marketcap {millify(coin.marketCap)}</p>
          <p>Coin Change {millify(coin.change)}</p>
        </Card>
      </Link>
    </Col>
  ));

  return (
    <React.Fragment>
      <Typography.Title level={2} className="heading">
        Top 100 Cryptocurrencies
      </Typography.Title>

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptoCoins}
      </Row>
    </React.Fragment>
  );
}

export default Cryptocurrencies;
