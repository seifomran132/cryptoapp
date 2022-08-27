import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "momment";
import { useGetNewsQuery } from "../services/NewsAPI";
import { useGetCryptoQuery } from "../services/CryptoAPI";

const { Text, Title } = Typography;

function News(props) {
  
  const [newsCategory, setNewsCategory] = useState('cryptocurrencies')
  const { data: cryptos } = useGetCryptoQuery(100);

    const searchParams = {
    newsCategory,
    count: props.simplified ? 6 : 20,
  };

  const defaultThumb =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

  const { data: cryptoNews } = useGetNewsQuery(searchParams);

  if (!cryptoNews?.value) {
    return "Loading...";
  }

  console.log("news", cryptoNews);

  const renderedNews = cryptoNews.value.map((news) => (
    <Col xs={24} sm={12} lg={8} key={news.url}>
      <Card className="news-card" hoverable>
        <a href={news.url} target="_blank" rel="noreferrer">
          <div className="news-image-container">
            <Title className="news-title" level={4}>
              {news.name}
            </Title>
            <img
              src={news?.image?.thumbnail?.contentUrl || defaultThumb}
              alt={news.name}
            />
          </div>
          <p>
            {news.description.length > 100
              ? `${news.description.substring(0, 100)}...`
              : `${news.description}...`}
          </p>
        </a>
      </Card>
    </Col>
  ));

  return (
    <Row gutter={[24, 24]}>
      {!props.simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => {
              setNewsCategory(value);
            }}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase())
            }
          >
            <option value="cryptoCurrencies">CryptoCurrencies</option>
            {cryptos?.data?.coins.map((coin)=> (
                <option value={coin.name}>{coin.name}</option>
            ))}
          </Select>
        </Col>
      )}
      {renderedNews}
    </Row>
  );
}

export default News;
