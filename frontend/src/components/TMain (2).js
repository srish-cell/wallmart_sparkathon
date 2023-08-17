import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import axios from 'axios';
import { server } from '../config/config';
import Main from "../components/Main/Main";

export default function TMain() {

  const [sidebarOpen, setsidebarOpen] = useState(false);
  const [retailerData, setRetailerData] = useState([]);
  const [productData, setProductData] = useState([]);

  const openSidebar = () => {
    setsidebarOpen(true);
  };

  const closeSidebar = () => {
    setsidebarOpen(false);
  };

  useEffect(() => {
    let source = axios.CancelToken.source();

    const loadData = async () => {

      let r_id = 1;
      
      try {
        const response = await axios.get(
          `${server}/api/retailerlist/`,
          {
            params: {},
            cancelToken: source.token,
          }
        );
        // console.log(response);
        let res_r_arr = [];
        const r_arr = response.data.reailer_list;
        console.log(r_arr);
        r_arr.map((e) => {
          console.log("hello");
          res_r_arr.push({ id: r_id, name: e.toString() });
          r_id += 1;
        })
        setRetailerData(res_r_arr);
        console.log(res_r_arr);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("caught cancel");
        } else {
          throw error;
        }
      }

      let p_id = 1;

      try {
        const response = await axios.get(
          `${server}/api/productlist/`,
          {
            params: {},
            cancelToken: source.token,
          }
        );
        console.log(response);
        let res_r_arr = [];
        const r_arr = response.data.product_list;
        console.log(r_arr);
        r_arr.map((e) => {
          console.log("hello");
          res_r_arr.push({ id: p_id, name: e.toString() });
          p_id += 1;
        })
        setProductData(res_r_arr);
        console.log(res_r_arr);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("caught cancel");
        } else {
          throw error;
        }
      }
    };

    loadData();

    return () => {
      source.cancel();
    };
  }, []);


  return (
    <div className="container1">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main />
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        closeSidebar={closeSidebar} 
        retailerData={retailerData}
        productData={productData}
      />
    </div>
  );
}
