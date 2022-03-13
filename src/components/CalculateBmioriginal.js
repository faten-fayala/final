import React,{useState} from 'react'

const CalculateBmi = () => {
    
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
  
    const [bmiResult, setBmiResult] = useState(null);
  
    const [status, setStatus] = useState("");
    const [low, setLow] = useState("");
    const [high, setHigh] = useState("");
  const handleSubmit=(e)=>{
      e.preventDefault()
      //(1,2 x IMC) + (0,23 x âge) – (10,8 x sexe ) – 5,4
      let bmi= Number(weight/(height/100)**2).toFixed(2)
      setLow(Math.round(18.5 * ((height/100)**2)));
      setHigh(Math.round(24.99 * ((height/100)**2)));
      setBmiResult(bmi)
      setStatus(getStatus(bmi))
      console.log(bmiResult)
      setHeight('')
      setWeight('')
  }
  const getStatus=(bmi)=>{
if (bmi<18.5) return 'You are underweight';
else if (bmi >= 18.5 && bmi < 24.9) return "Normal:You are in a healthy weight range";
 else if (bmi >= 25 && bmi < 29.9) return "You are Overweight";
  else return "You are Obese";
  }

    return (
        <div className="calculate-bmi">
           <div >
                <div >
                    <h2 className="bmi-title">Calculate Your BMI</h2>
                    <p>Calculez votre indice de masse corporel (IMC) et découvrez votre poids idéal !</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Enter your height in cm
                    </label>
                    <input type="number" name="height" value={height} onChange={(e)=>setHeight(e.target.value)} />
                    <label>
                        Enter your weight in kg
                    </label>
                    <input type="number" name="weight" value={weight} onChange={(e)=>setWeight(e.target.value)} />
                    <input type="submit" value="Submit"/>
                    {bmiResult && (
          <div className="mt-4">
            <p>Your BMI is: {bmiResult} </p>
            <p>You are currently: {status}</p>
            <p>Your suggested weight range is between {low} and {high}</p>
           
          </div>
        )}
                </form>
            </div> 
            <div>
                <img src="https://www.california-gym.com/wp-content/uploads/2019/09/imc2.png"  alt=""/>
            </div>
        </div>
    )
}

export default CalculateBmi
