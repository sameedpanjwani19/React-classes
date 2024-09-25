import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";

function App() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const getValues = (values) => {
    console.log(values);
}

  return (
    <div className="container w-100 p-5">
      <h2 className="text-center mb-5">Registration Form</h2>
      <form onSubmit={handleSubmit(getValues)}className="row g-3">
        <div className="col-md-6">
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              {...register("fullNameRequired", { required: true })}
            />
            {errors.fullNameRequired && <span className="text-danger">Full Name is required</span>}
            
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              {...register("emailRequired", { required: true })}
            />
            {errors.emailRequired && <span className="text-danger">Email is required</span>}
          </div>
          <div className="form-group">
            <label>National ID (CNIC):</label>
            <input
              type="text"
              className="form-control"
              name="nationalId"
              {...register("nationalIdRequired", { required: true, minLength: 13, maxLength: 13})}
            />
            {errors.nationalIdRequired && <span className="text-danger">National ID is required</span>}
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select
              className="form-control"
              name="gender"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Father Name:</label>
            <input
              type="text"
              className="form-control"
              name="fatherName"
              {...register("fatherNameRequired", { required: true })}
            />
            {errors.fatherNameRequired && <span className="text-danger">Father Name is required</span>}
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="text"
              className="form-control"
              name="phoneNumber"
              {...register("phoneNumberRequired", { required: true })}
            />
            {errors.phoneNumberRequired && <span className="text-danger">Phone Number is required</span>}
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              className="form-control"
              name="dateOfBirth"
              {...register("dateOfBirthRequired", { required: true })}
            />
            {errors.dateOfBirthRequired && <span className="text-danger">Date of Birth is required</span>}
          </div>
          <div className="form-group">
            <label>Do you have a Laptop?:</label>
            <select
              className="form-control"
              name="hasLaptop"
            >
              <option value="">Select Option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="form-group">
            <label>Address:</label>
            <textarea
              className="col-12 form-control"
              name="address"
              {...register("addressRequired", { required: true })}
            />
            {errors.addressRequired && <span className="text-danger">Address is required</span>}
          </div>
          <div className="form-group">
            <label>Last Qualification:</label>
            <input
              type="text"
              className="form-control"
              name="lastQualification"
              {...register("lastQualificationRequired", { required: true })}
            />
            {errors.lastQualificationRequired && <span className="text-danger">Last Qualification is required</span>}
          </div>
          <div className="col-12 text-center">
          <button type="submit" className="w-100 btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      
    </div>
  );
}

export default App;
