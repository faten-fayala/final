import React,{useState} from 'react';
import DatePicker from "react-datepicker";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const Datee = () => {
    // const [startDate, setStartDate] = useState(new Date());
    const [startDate,setStartDate]=useState(new Date())
  const [value, onChange] = useState(new Date());
    // const [value, setValue] = useState(new Date());
    // const onChange=()=>{
    //   setValue(value)
    // }
   
  return <div>

    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    <Calendar onChange={onChange} value={value} />
  <h1>{value.toString()}</h1>  
  </div>;
};

export default Datee;
