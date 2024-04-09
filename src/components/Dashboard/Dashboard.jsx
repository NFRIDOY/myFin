import { useState } from "react"
import Statistics from "../Statistics/Statistics"
import Modal from "../Modal/Modal"
// import ListBox from "../ListBox/ListBox"
import { useForm } from "react-hook-form";


export default function Dashboard() {

  const [incomeTotal, setIncomeTotal] = useState(0)
  const [expenceTotal, setExpenceTotal] = useState(0)

  // Handle form submission
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // TODO: handle The data with using modal income / expense
    console.log(data);
  };


  // Modal 

  let [isOpenModalIncome, setIsOpenModalIncome] = useState(false)
  let [isOpenModalExpense, setIsOpenModalExpense] = useState(false)

  // function closeModal() {
  //   setIsOpen(false)
  // }

  function openModalIncome() {
    setIsOpenModalIncome(true)
  }
  function openModalExpense() {
    setIsOpenModalExpense(true)
  }


  const data = [
    { name: 'Group A', value: 2000 },
    { name: 'Group B', value: 4567 },
  ];

  const incomeType = ["Salary", "Bonus"]
  const expenseType = ["Groceries", "Food", "Clothing"]

  return (
    <div className='max-h-screen *:border-2 grid lg:grid-cols-5'>
      <div className='lg:col-span-2'>
        <div className="space-x-12 flex justify-center ">
          <button className="btn btn-success text-white flex flex-col" onClick={openModalIncome}>
            <h1>Income</h1>
            <h2>{incomeTotal}</h2>
          </button>
          <button className="btn btn-error text-white flex flex-col" onClick={openModalExpense}>
            <h1>Expence</h1>
            <h2>{expenceTotal}</h2>
          </button>
          <Modal
            isOpen={isOpenModalIncome}
            setIsOpen={setIsOpenModalIncome}
            title="Income"
            type={incomeType}
            setTotal={setIncomeTotal}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          >

          </Modal>
          <Modal
            isOpen={isOpenModalExpense}
            setIsOpen={setIsOpenModalExpense}
            title="Expense"
            type={expenseType}
            setTotal={setExpenceTotal}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          >

          </Modal>
        </div>
        <div className="lg:mt-10">
          <h1>
            Transections
            {/* <ListBox ></ListBox> */}
          </h1>
        </div>
      </div>
      <div className='lg:col-span-3 min-h-[calc(100vh-150px)]'>
        <Statistics data={data} />
      </div>
    </div>
  )
}
