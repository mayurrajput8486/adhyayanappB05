import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, NavLink} from 'react-router-dom'

const Delete = () => {
    const [student,setStudent] = useState('')
    const {studentID} = useParams()
    const navigate = useNavigate()
    //fetch student data

    const getData = async() =>{
        const response = await axios.get(`http://localhost:8000/students/${studentID}`)
        //console.log(response)

        const result = response.data
        //console.log(result)
        setStudent(result)
    }

    useEffect(()=>{
        getData()
    },[])

    const deleteDATA = () =>{
        axios.delete(`http://localhost:8000/delete/students/${studentID}`)
        alert('Data Deleted')
        navigate('/studata')
    }


  return (
    <div>
        <h2>Delete Comp</h2>
        <div className='bg-primary w-50 mx-auto p-4 rounded-3 mt-5 mb-5'>
            <div className='mt-3'>
                <h2>Student id -{student._id}</h2>
            </div>
            <div className='mt-3'>
                <h2>Student Name - {student.fname} {student.lname}</h2>
            </div>
            <div className='mt-3'>
                <h2>Student Email - {student.email}</h2>
            </div>
            <div className='mt-3'>
                <button className='btn btn-danger me-3' onClick={deleteDATA}>YES</button>
                <NavLink to='/studata'><button className='btn btn-success'>NO</button></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Delete