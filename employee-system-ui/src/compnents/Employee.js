import React from 'react'

function Employee({employee}) {
  return (
    <tr key={employee.Id}>
                
    <td>{employee.firstName}</td>
    <td>{employee.LastName}</td>
    <td>{employee.EmailId}</td>
    <td>
        <a href='#'>Edit</a>
        <a href='#'>Delete </a>
    </td>
</tr>
  )
}

export default Employee