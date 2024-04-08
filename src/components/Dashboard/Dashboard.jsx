import { useState } from "react"
import Statistics from "../Statistics/Statistics"


export default function Dashboard() {
  const [income, setIncome] = useState(0)
  const [expence, setExpence] = useState(0)
  return (
    <div className='max-h-screen *:border-2 grid lg:grid-cols-5'>
      <div className='lg:col-span-2'>
        <div className="space-x-12 flex justify-center ">
          <button className="btn btn-success text-white flex flex-col" onClick={()=> setIncome(prev=> prev+1)}>
            <h1>Income</h1>
            <h2>{income}</h2>
          </button>
          <button className="btn btn-error text-white flex flex-col" onClick={()=> setExpence(prev=> prev+1)}>
            <h1>Expence</h1>
            <h2>{expence}</h2>
          </button>
        </div>
        <div className="lg:mt-10">
          <h1>
            Transections
          </h1>
        </div>
      </div>
      <div className='lg:col-span-3 min-h-[calc(100vh-150px)]'>
        <Statistics />
      </div>
    </div>
  )
}
