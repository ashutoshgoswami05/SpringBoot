import React, {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../service/EmployeeService';
import Employee from './Employee';

function EmployeeList() {
    const navigate= useNavigate();

const [loading, setloading] = useState(true)
const [Employees, setEmployees] = useState(second)

useEffect(() => {
  const fetchData=async ()=>{
      setloading(true);
      try{
        const response=await EmployeeService.getEmployees();
      setEmployees(response.data)
    }
      catch(err){
          console.log(err);
      }
      setloading(false)
      
  }
  fetchData()
}, [])

  return (
    <div className='container mx-auto my-8'>
<div className='h-12'>
    <button onClick={()=> navigate("/addEmployee")} className='text-white px-6 py-2 font-semibold roundede bg-slate-600'>Add Employee</button>
</div>
<div className='flex shadow border-b'>
    <table className='min-w-full'>
        <thead className='bg-gray-50'>  
            <tr>
                <th className='text-left font-medium'>First Name</th>
                <th>Last Name</th>
                <th>Email ID</th>
                <th>Actions</th>
            </tr>
        </thead>
        {!loading}
        <tbody>
            {Employees.map((employee)=>(
         <Employee employee={employee} key={employee.Id}></Employee>
            ))}
        </tbody>
    </table>

</div>
    </div>
  )
}

export default EmployeeList