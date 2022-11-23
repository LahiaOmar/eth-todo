import React, { ChangeEvent, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Home() {
  const [taks, setTask] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  const handleAddTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  return (
    <div className="flex items-center justify-center pt-10">
      <div className="w-[800px]">
        <div className="">
          <Input value={taks} onChange={handleChange} />
          <Button onClick={handleAddTask}>add</Button>      
        </div>
      </div>
    </div>
  )
}
