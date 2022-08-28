import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Typography } from "antd";
import { useGetCryptoQuery } from "../services/CryptoAPI";

function Cryptocurrencies(props) {
  const count = props.simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptoQuery(count);

  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const newCryptoList = data?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm)
    );
    setCryptos(newCryptoList);
  }, [searchTerm, data]);

  if (isFetching) {
    return "Loading...";
  }

  const cryptoCoins = cryptos?.map((coin) => (
    <Col xs={24} sm={12} lg={6} key={coin.uuid} className="crypto-card">
      <Link to={`/crypto/${coin.uuid}`}>
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
      {!props.simplified && (
        <div>
          <Input
            placeholder="Search Cryptocurrencies"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptoCoins}
      </Row>
    </React.Fragment>
  );
}

export default Cryptocurrencies;
