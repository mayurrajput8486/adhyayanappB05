import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
const Register = () => {

  const { register, handleSubmit, reset, setValue, formState : {errors}} = useForm()

  const postData = (data) => {
    axios.post('http://localhost:8000/students', data)
    alert('Data Added !!!!')
    reset()
  }
  const [course,setCourse] = useState('')

  const courseFees = {
    React : '45000',
    Java : '35000',
    Python : '40000',
    "C++"  : '5000',
    "Data Analytics" : '50000',
    Azure : '25000',
    DSA : '10000',
    Testing : '30000',
    AWS : '30000'
    
  }

  const courseHandle = (event) =>{
    const selectCourse = event.target.value
    setCourse(selectCourse)
    const selectFees = courseFees[selectCourse]
    setValue("fees",selectFees)
  }
  return (
    <div>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample photo" className="img-fluid abc"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">Student registration form</h3>
                      <form onSubmit={handleSubmit(postData)}>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <input type="text" id="form3Example1m" className="form-control form-control-lg" 
                              {...register('fname',{ 
                                required : 'First Name is required',
                                pattern : {
                                  value : /^[A-Za-z]+$/,
                                  message : 'Only Alphabates are allowed'
                                }
                              })} />
                              <label className="form-label" htmlFor="form3Example1m">First name</label>
                              {
                                errors.fname && <p className='text-danger'>{errors.fname.message}</p>
                              }
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <input type="text" id="form3Example1n" className="form-control form-control-lg" 
                              {...register('lname',{
                                required : 'Last Name is Required',
                                pattern : {
                                  value :/^[A-Za-z]+$/,
                                  message : 'Only Alphabates are allowed'
                                }
                              })} 
                              />
                              <label className="form-label" htmlFor="form3Example1n">Last name</label>
                              {
                                errors.lname && <p className='text-danger'>{errors.lname.message}</p>
                              }
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <input type="text" id="form3Example1m1" className="form-control form-control-lg" {...register('mother_name')} />
                              <label className="form-label" htmlFor="form3Example1m1">Mother's name</label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <input type="text" id="form3Example1n1" className="form-control form-control-lg" {...register('father_name')} />
                              <label className="form-label" htmlFor="form3Example1n1">Father's name</label>
                            </div>
                          </div>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="text" id="form3Example8" className="form-control form-control-lg" {...register('address')} />
                          <label className="form-label" htmlFor="form3Example8">Address</label>
                        </div>

                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                          <h6 className="mb-0 me-4">Gender: </h6>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" value="female"  {...register('gender')} />
                            <label className="form-check-label" htmlFor="femaleGender">Female</label>
                          </div>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" value="male" {...register('gender')} />
                            <label className="form-check-label" htmlFor="maleGender">Male</label>
                          </div>

                          <div className="form-check form-check-inline mb-0">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender" value="other" {...register('gender')} />
                            <label className="form-check-label" htmlFor="otherGender">Other</label>
                          </div>

                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <select data-mdb-select-init className='w-100 form-control'
                             {...register('course')} onChange={courseHandle} value={course} >
                             <option value=''>Select Course</option>
                                {
                                  Object.keys(courseFees).map((course)=>{
                                    return(
                                      <option key={course}>
                                        {course}
                                      </option>
                                    )
                                  })
                                }
                            </select>
                          </div>

                          <div className="col-md-6 mb-4">
                            <input 
                                type='text'
                                className='form-control'
                                placeholder='Select Course for Fess'
                                {...register('fees')}
                            />
                          </div>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="text" id="form3Example9" className="form-control form-control-lg" {...register('dob')} />
                          <label className="form-label" htmlFor="form3Example9">DOB</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="text" id="form3Example90" className="form-control form-control-lg"  {...register('pincode')} />
                          <label className="form-label" htmlFor="form3Example90">Pincode</label>
                          
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="text" id="form3Example90" className="form-control form-control-lg"  
                          {...register('password',{
                            required : 'Password in Required',
                            pattern : {
                              value : /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                              message : 'Password must be at least 8 characters, include one uppercase letter, and one special character'
                            }
                          })} 
                          />
                          <label className="form-label" htmlFor="form3Example90">Password</label>
                          {
                            errors.password && <p className='text-danger'>{errors.password.message}</p>
                          }
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="text" id="form3Example97" className="form-control form-control-lg"  {...register('email')} />
                          <label className="form-label" htmlFor="form3Example97">Email ID</label>
                        </div>

                        <div className="d-flex justify-content-end pt-3">
                          <button type="reset" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg">Reset all</button>
                          <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-lg ms-2">Submit form</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register



