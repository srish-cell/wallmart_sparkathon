import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { server } from '../../config/config';
import "./Sidebar.css";
import Dropdown from "../Dropdown/Dropdown";
// import { Select, MenuItem, InputLabel } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import data from "../Dropdown/data/animals.json";

const Sidebar = ({ retailerData, productData, sidebarOpen, closeSidebar }) => {

  const [rvalue, setRValue] = useState(null);
  const [pvalue, setPValue] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleGraphSubmit = async () => {
      console.log("retailer : ", rvalue);
      console.log("product : ", pvalue);
      console.log("start date : ", startDate);
      console.log("end date : ", endDate);

      const response = await axios.get(`${server}/api/processReatiler`, {
        params: {
          retailer_id: parseInt(rvalue.name),
          prodcut_id: pvalue.name,
          start_time: startDate,
          end_time: endDate,
          type: 'secondary',
        },
      });

      console.log(response);

  }

  const handleStartDate = (sdate) => {
    setStartDate(sdate);
  }

  const handleEndDate = (edate) => {
    setEndDate(edate);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <br/><br/><br/><br/>
          <h1>Keplar-452b</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
          <h1>Filters</h1>
          <h3>Retailer ID</h3>
          {
            retailerData && (
              <div class="search-wrap">
                  <Dropdown 
                      options={retailerData} 
                      id='id'
                      label='name'
                      prompt='Enter Retailer ...' 
                      value={rvalue}
                      onChange={val => setRValue(val)}
                  />
              </div>
            )
          }
            <br/>
            <h3>Product ID</h3>
            {
            productData && (
              <div class="search-wrap">
                  <Dropdown 
                      options={productData} 
                      id='id'
                      label='name'
                      prompt='Enter Product ...' 
                      value={pvalue}
                      onChange={val => setPValue(val)}
                  />
              </div>
            )
          }
        <div>
        <div class="form-group">
          <label className="d-a-label" id="demo-simple-select-label">
            Start Date
          </label>
          <div>
            <KeyboardDatePicker
              disableToolbar
              className="mi-a-field date-center"
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              name="updated_on"
              value={startDate}
              onChange={handleStartDate}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </div>
        </div>
        <div class="form-group">
          <label className="d-a-label" id="demo-simple-select-label">
            End Date
          </label>
          <div>
            <KeyboardDatePicker
              disableToolbar
              className="mi-a-field date-center"
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              name="updated_on"
              value={endDate}
              onChange={handleEndDate}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </div>
        </div>
          {/* <label for="start" className="form-label text-light m-4">
            Start Date:
          </label>
          <input type="date" value={startDate} onChange={setStartDate} id="start" name="start"></input>
          <label for="end" className="form-label text-light m-4">
            End Date:
          </label>
          <input type="date" value={endDate} onChange={setEndDate} id="end" name="end"></input> */}
          <button onClick={handleGraphSubmit} className="btn btn-primary m-4">
            Show Results
          </button>
        </div>
      </div>
    </div>
    </MuiPickersUtilsProvider>
  );
};

export default Sidebar;
