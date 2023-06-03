import { React, useState } from "react";
import "./body1.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider.js";
// import ArrowForwardIcon from '@mui/icons-material';

function Body1() {
  const [state, dispatch] = useStateValue();
  const [dataset_name, set_dataset_name] = useState("");
  const [parameter_num, set_parameter_num] = useState(0);
  const [entry_num, set_entry_num] = useState(0);
  const [entry_des, set_entry_des] = useState(0);

  console.log(state);

  const send_data_body1 = () => {
    console.log("clicked1");

    dispatch({
      type: "PARAMETER_COUNT",
      item: {
        dataset_name: dataset_name,
        count: parameter_num,
        entry: entry_num,
        des: entry_des,
      },
    });
  };

  const handleChange1 = (event) => {
    set_dataset_name(event.target.value);
  };

  const handleChange2 = (event) => {
    set_parameter_num(event.target.value);
  };

  const handleChange3 = (event) => {
    set_entry_num(event.target.value);
  };

  const handleChange4 = (event) => {
    set_entry_des(event.target.value);
  };

  return (
    <>
      <div className="parent mt-0">
        <div class="sidebar">
          <div className="body1_sidebar_heading">Datacartel</div>
          <div class="sidebar-content">
            <a href="#" className="steps step1">
              1. Add dataset Information
            </a>
            <a href="#" className="steps step2">
              2. Add parameters
            </a>
            <a href="#" className="steps step3">
              3. Download the Dataset
            </a>
          </div>
          <div className="sidebar1_buttons">
            <Link to={"/parameters"}>
              <button onClick={send_data_body1} className="nextbutton1">
                Next
              </button>
            </Link>
          </div>
        </div>

        <div className="body1_body vh-100">
        <div className="body1_heading">Hey user, Enter dataset details...</div>
          {/* <a href="https://ibb.co/jZx3v4Y"><img src="https://imgbox.com/4HN9Xw4m" alt="1" border="0"></img></a>  */}
          <div className="body1_input mt-0">
            {/* <span className="body1_textspan1">Enter Dataset Name </span> */}
            <span className="body1_textspan">Enter Dataset Detail :</span>
            <div className="body1_data">
              <input
                type="text"
                onChange={handleChange1}
                className="body1_input body1_dataset_name"
                placeholder="Insert Dataset Detail"
              />
            </div>
            {/* <span className="body1_textspan">Enter brief Description of dataset :</span>
            <div className="body1_data">
              <input
                type="text"
                onChange={handleChange4}
                className="body1_input body1_dataset_name"
                placeholder="Brief Description of Dataset"
              />
            </div> */}
            <span className="body1_textspan">Number of entries :</span>
            <div className="body1_data">
              <input
                type="number"
                onChange={handleChange3}
                className="body1_input body1_parameter_number"
                placeholder="Number of entries"
              />
            </div>
            <span className="body1_textspan">
              Enter the number of parameters:
            </span>
            <div className="body1_data">
              <input
                type="number"
                onChange={handleChange2}
                className="body1_input body1_entry_number"
                placeholder="Number of paramenters"
              />
            </div>
            <div>
              {/* <Link to={"/parameters"}><button onClick={send_data_body1} className='body1_button'>Create Dataset</button></Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body1;
