import React, { useState } from "react";
import "./body2.css";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import axios from "axios";

function Body2() {
  const [state, dispatch] = useStateValue();
  const [parameters_input, set_paramteters_input] = useState([]);
  const [jsonx, set_jsonx] = useState([]);

  const handle_p_i_change = (index, event) => {
    const values = [...parameters_input];
    values[index] = event.target.value;
    set_paramteters_input(values);
  };

  const json_data_save = (res) => {
    console.log("hi", res);
    dispatch({
      type: "JSON_DATA",
      item: {
        jsonx: res,
      },
    });
  };

  let history = useNavigate();

  const [isLoading, setLoading] = useState(false);

  const handleClickx2 = () => {
    setLoading(true);
  };

  const generate_dataset = () => {
    // console.log(state.dataset_name);
    // console.log(parameters_input);
    // console.log(state.entry);
    handleClickx2();

    axios
      .post("http://aryanxc.pythonanywhere.com/dataset", {
        topic: state.dataset_name,
        parameter: parameters_input,
        rows: state.entry,
      })
      .then((res) => {
        res = res.data;
        set_jsonx(res);
        console.log(res);
        json_data_save(res);
        history("/dataset");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="parent parentb2">
        <div class="sidebar sidebar2">
          <div className="body1_sidebar_heading">Datacartel</div>
          <div class="sidebar-content">
            <a href="#" className="steps step1 stepb2x1">
              1. Add dataset Information
            </a>
            <a href="#" className="steps step2 stepb2x2">
              2. Add parameters
            </a>
            <a href="#" className="steps step3">
              3. Download the Dataset
            </a>
          </div>
          {/* <div className="sidebar1_buttons"> */}
          {/* <button className="previousbutton">Previous</button> */}
          <div className="body2_parent">
            <Link to={"/"}>
              <button className="previousbutton">Back</button>
            </Link>
            {/* <Link to={"/dataset"}> */}
            <button onClick={generate_dataset} className="nextbutton2">
              Next
            </button>
            {/* </Link> */}
          </div>
          {/* </div> */}
        </div>
        <div className="body2_body vh-100">
          <div className="body2_heading">You're almost there!! Enter the parameters...</div>
          {/* [...Array(n)].map((e, i) => <span className="busterCards" key={i}>♦</span>) */}
          <section className="body2_parameter_boxes">
            {Array.from({ length: state.count }, (_, i) => (
              <input
                type="text"
                onChange={(event) => handle_p_i_change(i, event)}
                className={`parameterx parameter_name_field_${i}`}
                placeholder={`Enter Parameter ${i + 1}`}
              />
            ))}
          </section>
          <div className="loadingx">
            {isLoading && (
              <div className="loading-spinner">
                {/* Add your loading spinner component here */}
                <div className="spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <p>Generating dataset</p>
                </div>
              </div>
            )}
          </div>
          {/* <Link to={"/dataset"}><button onClick={generate_dataset} className="body2_button">Generate Dataset</button></Link> */}
        </div>
      </div>
    </>
  );
}

export default Body2;
