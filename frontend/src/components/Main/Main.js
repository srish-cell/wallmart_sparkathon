import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import "./Main.css";
import hello from "../../assets/hello.svg";
import Chart from "../../components/Chart/Chart";
import GenderChart from '../../Charts/genderchart';
import ISCVisualizer from "../ISCVisualizer/ISCVisualizer";
import WCCVisualizer from "../WCCVisualizer/WCCVisualizer";
import Header from '../Header/Header';

import Table from '../Table/Table'
const Page = styled.div`
    // width: 100%;
    display: grid;
    min-height: 100vh;
    column-gap: 45px;
    grid-template-columns: 5fr 15fr; 
    // grid-template-rows: auto;
    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.textColor};
`;

const Main = () => {

  const [rawData, setRawData] = useState([]);

  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (fetched === false) {
      initData();
    }
  }, [fetched]);

  const initData = async () => {
    try {
      const [
        response,
        rawDataResponse,
        stateDailyResponse,
      ] = await Promise.all([
        axios.get('https://api.covid19india.org/data.json'),
        axios.get('https://api.covid19india.org/raw_data.json'),
        axios.get('https://api.covid19india.org/states_daily.json'),
      ]);
      setRawData(rawDataResponse.data.raw_data);
      setFetched(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Demand Forecaster</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Graph</h1>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            
            <Header received={500} sold={430} available={70} />
            <ISCVisualizer />
            <WCCVisualizer />
            <Table/>
          </div>

          {/* <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h3>Quantity of products to buy</h3>
                <p>300</p>
              </div>

              <div className="card2">
                <h3>Overall Sales</h3>
                <p>4,200</p>
              </div>

              <div className="card3">
                <h3>kuch to</h3>
                <p>3900</p>
              </div>

              <div className="card4">
                <h3>kuch to</h3>
                <p>1881</p>
              </div>
            </div>
          </div> */}
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;
