import React, { useState } from "react";

const AssignPmo = props => {
  let [email, setEmail] = useState("");
  let addPmoHandler = e => {
    const roles = [
      ...props.roles,
      {
        email: email,
        firstName: "Test User",
        lastName: "Test"
      }
    ];
    props.setRoles(roles);
    setEmail("");
    e.preventDefault();
  };

  const removePmoHandler = e => {
    const roles = [...props.roles];
    const updatedRoles = roles.filter(value => value.email !== email);
    props.setRoles(updatedRoles);
    e.preventDefault();
  };

  return (
    <div>
      <div className='card '>
        <div className='card-header card bg-primary text-white'>ASSIGN PMO</div>
        <br />
        <table>
          <thead>
            <tr>
              <th className='form-group'>
                <label htmlFor='employeeid'>Employee Id / Email Address</label>
              </th>
              <th>
                <input
                  className='form-control'
                  type='email'
                  placeholder='Enter Email Address'
                  name='email'
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
              </th>
              <th>
                <button className='btn btn-primary ' onClick={addPmoHandler}>
                  Add PMO
                </button>
              </th>
              <th>
                <button className='btn btn-danger' onClick={removePmoHandler}>
                  Remove PMO
                </button>
              </th>
            </tr>
          </thead>
        </table>
        <br />
      </div>
    </div>
  );
};

export default AssignPmo;
