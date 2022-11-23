import { ChangeEvent, useState } from "react";
import Input from "../components/Input";

export default function Home() {
  const [taks, setTask] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  return (
    <div>
      <Input value={taks} onChange={handleChange} />      
    </div>
  )
}
