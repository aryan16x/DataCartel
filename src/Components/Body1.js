import { React,useState } from 'react'
import "./body1.css"
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider.js';
// import ArrowForwardIcon from '@mui/icons-material';

function Body1() {
  
  const [ state,dispatch ] = useStateValue();
  const [dataset_name, set_dataset_name] = useState('');
  const [parameter_num, set_parameter_num] = useState(0);
  const [entry_num, set_entry_num] = useState(0);

  console.log(state)

  const send_data_body1 = () => {
    dispatch({
      type: 'PARAMETER_COUNT',
      item: {
        dataset_name: dataset_name,
        count: parameter_num,
        entry: entry_num
      }
    })
  } 

  const handleChange1 = event => {
    set_dataset_name(event.target.value);
  };

  const handleChange2 = event => {
    set_parameter_num(event.target.value);
  };

  const handleChange3 = event => {
    set_entry_num(event.target.value);
  };

  return (
    <>  
    <div className="parent">
    {/* <div class="sidebar">
  <div class="sidebar-content">
    <a href="#" class="active">Home</a>
    <a href="#">About</a>
    <a href="#">Products</a>
    <a href="#">Contact</a>
  </div>
</div> */}
        <div className='body1_body d-flex flex-column vh-100' >  
      
        {/* <a href="https://ibb.co/jZx3v4Y"><img src="https://imgbox.com/4HN9Xw4m" alt="1" border="0"></img></a>  */}
          <div className='body1_input container mt-5'>
            {/* <span className="body1_textspan1">Enter Dataset Name </span> */}
            <div className='body1_data'>
            <span className="body1_textspan">Enter Dataset Name :</span>
            <input type="text" onChange={handleChange1} className='body1_dataset_name' placeholder="Insert Dataset Name"/>
            </div>
            <div className='body1_data'>
            <span className="body1_textspan">Number of entries :</span>
            <input type="number" onChange={handleChange3} className='body1_parameter_number' placeholder="Number of entries"/>
            </div>
            <div className='body1_data'>
            <span className="body1_textspan">Enter the number of parameters:</span>
            <input type="number" onChange={handleChange2} className='body1_entry_number' placeholder="Number of paramenters" />
            </div>     
            <div >
              <Link to={"/parameters"}><button onClick={send_data_body1} className='body1_button'>Create Dataset</button></Link>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Body1