import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const StudentComponent = ({ student }) => {
  const { deleteStudent } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <li className="list-group-item text-right">
        <strong>Name: </strong>
        {student.studentname}
        <strong> Gender:</strong> {student.gender}
        <strong> Level:</strong> {student.classlevel}
        <strong> Home:</strong> {student.homestate}
        <strong> Major: </strong> {student.major}
        <strong> Extra Curricular:</strong> {student.extracurricular}
        <button
          type="submit"
          className="btn btn-danger ml-3"
          onClick={() => deleteStudent(student.id)}
        >
          X
        </button>
      </li>
    </React.Fragment>
  );
};

export default StudentComponent;
