import React,{useState} from 'react'
import EmployeeService from '../service/EmployeeService'

function AddEmployee() {

     const [employee, setEmployee] = useState({
         id:"",
         firstName:"",
         lastName:"",
         emailId:""
     })
    

const handleChange=(e) =>{
    const val=e.target.value
        setEmployee({...employee,[e.target.name]: val})
}     

const saveEmployee=(e)=>{
    e.preventDEfault();
    EmployeeService.saveEmployee(employee).then((response)=>{
        console.log(response)
    }).catch((error)=>{
        console.log(error);
    })

}

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1> Add New Employee</h1>
            </div>
            <div className="my-4 item-center justify-center h-14 w-full">
                <label className="block text-gray-600 text-sm font-normal">First Name</label>
                <input onChange={(e) => handleChange(e)} name='firstName' value={employee.firstName} type="text" className="h-10 w-97 border mt-2 px-2 py-2"></input>
            </div>
            <div className="my-4 item-center justify-center h-14 w-full">
                <label className="block text-gray-600 text-sm font-normal">Last Name</label>
                <input onChange={(e) => handleChange(e)} name='lastName' value={employee.lastName} type="text" className="h-10 w-97 border mt-2 px-2 py-2"></input>
            </div>
            <div className="my-4 item-center justify-center h-14 w-full">
                <label className="block text-gray-600 text-sm font-normal">Email</label>
                <input onChange={(e) => handleChange(e)} name='emailId' value={employee.emailId} type="email" className="h-10 w-97 border mt-2 px-2 py-2"></input>
            </div>
            <div className="my-4 space-x-4 pt-4 item-center justify-center h-14 w-full">
                <button onClick={saveEmployee} className="ronded text-white font-semibold py-2 px-2 hover:bg-green-700 bg-green-400">Save</button>
                <button className="ronded text-white font-semibold py-2 px-2 hover:bg-red-700 bg-red-400">Clear</button>
            </div>
        </div>
    </div>
  )

}

export default AddEmployee