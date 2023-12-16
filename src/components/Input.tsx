export function calcTM(weight: number) {
  return Math.round((weight * 0.9) / 2.5) * 2.5
}

interface props {
  weight: number
  setWeight: React.Dispatch<React.SetStateAction<number>>
  setTM: React.Dispatch<React.SetStateAction<number>>
}

export default function Input({ weight, setWeight, setTM }: props) {
  
  function handleChange(weight: number) {
    setWeight(weight);
    setTM(handleNaN(calcTM(weight)));
  }

  // when the input HTML element is empty e.target.valueAsNumber returns NaN
  function handleNaN(number: number) {
    if (Number.isNaN(number)) return 0
    else return number
  }
  
  return (
    <input 
      type="number"
      value={weight}
      onChange={e => handleChange(e.target.valueAsNumber)}
    />
  )
}
