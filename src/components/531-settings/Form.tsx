interface props {
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
}

export default function Form({ value, setValue }: props) {
  return (
    <input pattern="[0-9]*" type="number" value={value} onChange={e => setValue(e.target.valueAsNumber)}/>
  )
}
