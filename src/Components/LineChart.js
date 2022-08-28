import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

function LineChart(props) {
  const coinPrice = [];
  const coinTimeStamp = [];

  for (let i = 0; i < props.coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(props.coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < props.coinHistory?.data?.history?.length; i += 1) {
    coinTimeStamp.push(new Date(props.coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }

  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <React.Fragment>
      <Row className="chart-header">
        <Typography.Title level={2} className="chart-title">
          {props.coinName} Price Chart
        </Typography.Title>
        <Col className="price-container">
          <Typography.Title level={5} className="price-change">
            {props.coinHistory?.data?.change}%
          </Typography.Title>
          <Typography.Title level={5} className="current-price">
            Current {props.coinName} Price: $ {props.currentPrice}
          </Typography.Title>
        </Col>
      </Row>
      <Line data={data} options={options}></Line>
    </React.Fragment>
  );
}

export default LineChart;
