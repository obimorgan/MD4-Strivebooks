import React from 'react';
import UseForm from "./UseForm";
import Validation from './Validation';

const Registration = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = UseForm(login, Validation);

  function login() {
    console.log('No errors, submit callback called!');
  }

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input autoComplete="off" className={`input ${errors.name && 'is-danger'}`} type="name" name="name" onChange={handleChange} value={values.name || ''} required />
                  {errors.name && (
                    <p className="help is-danger">{errors.name}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Surname</label>
                <div className="control">
                  <input className={`input ${errors.surname && 'is-danger'}`} type="surname" name="surname" onChange={handleChange} value={values.surname || ''} required />
                </div>
                {errors.surname && (
                  <p className="help is-danger">{errors.surname}</p>
                )}
              </div>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input autoComplete="off" className={`input ${errors.email && 'is-danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input className={`input ${errors.password && 'is-danger'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} required />
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
              <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                  <input className={`input ${errors.passwordConfirm && 'is-danger'}`} type="passwordConfirm" name="passwordConfirm" onChange={handleChange} value={values.passwordConfirm || ''} required />
                </div>
                {errors.passwordConfirm && (
                  <p className="help is-danger">{errors.passwordConfirm}</p>
                )}
              </div>
              <button type="submit" className="button is-block is-info is-fullwidth">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;