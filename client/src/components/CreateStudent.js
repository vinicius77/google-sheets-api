import React, { useState, useContext } from 'react';
import Loading from './Loading';
import { GlobalContext } from '../context/GlobalState';
import { Redirect } from 'react-router-dom';
import uuid from 'uuid';

const CreateStudent = () => {
  const [student, setStudent] = useState({});
  const { addStudent } = useContext(GlobalContext);
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputHandler = event => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    setLoading(true);
    const newStudent = {
      id: uuid.v4(),
      ...student
    };

    addStudent(newStudent);

    setTimeout(() => {
      setLoading(false);
      setRedirect(!redirect);
    }, 2000);
  };

  return (
    <React.Fragment>
      {redirect ? <Redirect to="/" /> : null}
      {loading ? <Loading /> : null}
      <h1 className="text-center mb-3">Create Student </h1>
      <form onSubmit={event => onSubmitHandler(event)} className="mb-4">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="studentname"
            className="form-control"
            onChange={event => inputHandler(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            name="gender"
            className="form-control"
            onChange={event => inputHandler(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="classlevel">Level</label>
          <input
            type="text"
            name="classlevel"
            className="form-control"
            onChange={event => inputHandler(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="homestate">Home</label>
          <input
            type="text"
            name="homestate"
            className="form-control"
            onChange={event => inputHandler(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="major">Major</label>
          <input
            type="text"
            name="major"
            className="form-control"
            onChange={event => inputHandler(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="extracurricularactivity">Extra Curricular</label>
          <input
            type="text"
            name="extracurricularactivity"
            className="form-control"
            onChange={event => inputHandler(event)}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Add Student
        </button>
      </form>
    </React.Fragment>
  );
};

export default CreateStudent;
