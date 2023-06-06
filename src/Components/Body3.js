import React from "react";
import "./body3.css";
import CsvDownloadButton from "react-json-to-csv";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Body3() {
  const [state, dispatch] = useStateValue();

  let res = state.jsonx
 let res2 = JSON.stringify(state.jsonx[0])
  
  
  // document.getElementById("Jsondata").innerText = `${res}`

  const jsonFileDownload = () => {
    const fileName = "finename.json";
    const data = new Blob([JSON.stringify(res)], { type: "text/json" });
    const jsonURL = window.URL.createObjectURL(data);
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = jsonURL;
    link.setAttribute("download", fileName);
    link.click();
    document.body.removeChild(link);
  };

  const mockData = [{
    "name": "aryan",
    "age": 20
  },{
    "name": "aryan",
    "age": 20
  }]



  return (
    <>
      <div className="parent parent3">
        <div class="sidebar sidebar3">
          <div className="body1_sidebar_heading">Datacartel</div>
          <div class="sidebar-content">
            <a href="#" className="steps step1 stepb3x1">
              1. Add dataset Information
            </a>
            <a href="#" className="steps step2">
              2. Add parameters
            </a>
            <a href="#" className="steps step3 stepb3x3">
              3. Download the Dataset
            </a>
          </div>
          <div className="sidebar1_buttons">
            <Link to={"/"}>
              <button className="nextbutton1">Home</button>
            </Link>
          </div>
        </div>

        <div className="body3_body vh-100">
        <div className="body3_heading">Thanks for visiting...</div>
          <div className=" body3_data">
            <div className="body3_dataset_table container ">
              <div className="Jsondata" id="Jsondata">{`${res2}`}</div>
            </div>
            <button className="body3_button" onClick={jsonFileDownload}>
              <b>Download JSON</b>
            </button>
            <CsvDownloadButton
              data={mockData}
              filename="good_data.csv"
              className="body3_button"
            >
              <b>Download CSV</b>
            </CsvDownloadButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body3;
