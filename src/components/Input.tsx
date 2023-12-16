interface props {
  weight: number
  setWeight: React.Dispatch<React.SetStateAction<number>>
  setTM: React.Dispatch<React.SetStateAction<number>>
}

export default function Input({ weight, setWeight, setTM }: props) {
  
  function handleChange(weight: number) {
    setWeight(weight);
  }
  
  return (
    <input 
      type="number"
      value={weight}
      onChange={e => handleChange(e.target.valueAsNumber)}
    />
  )
}
