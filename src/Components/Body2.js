import React, { useState } from 'react'
import "./body2.css"
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import axios from 'axios'

function Body2() {

    const [ state,dispatch ] = useStateValue();
    const [parameters_input,set_paramteters_input] = useState([]);
    const [jsonx,set_jsonx] = useState([]);

    const handle_p_i_change = (index,event) => {
        const values = [...parameters_input];
        values[index] = event.target.value;
        set_paramteters_input(values);
    }

    const json_data_save = () => {
        dispatch({
          type: 'JSON_DATA',
          item: {
            jsonx: jsonx
          }
        })
      }

    const generate_dataset = () => {
        console.log(state.dataset_name);
        console.log(parameters_input);
        console.log(state.entry);
        
        
        axios
            .post("http://aryanxc.pythonanywhere.com/dataset", {
                "topic": state.dataset_name,
                "parameter": parameters_input,
                "rows": state.entry
            })
            .then((res) => {
                set_jsonx(res);
                console.log(res);
                json_data_save();
            })
            .catch((err) => {
                console.error(err);
            })

      }
    

  return (
    <>
        <div className="body2_body d-flex flex-column vh-100">
            {/* [...Array(n)].map((e, i) => <span className="busterCards" key={i}>♦</span>) */}
            <section className='body2_parameter_boxes'>
                {Array.from({ length: state.count }, (_, i) => <input type="text" onChange={(event) => handle_p_i_change(i, event)} className={`parameterx parameter_name_field_${i}`} placeholder={`Enter Parameter ${i+1}`}/>)}
            </section>
            <Link to={"/dataset"}><button onClick={generate_dataset} className="body2_button">Generate Dataset</button></Link>
        </div>
    </>
  )
}

export default Body2