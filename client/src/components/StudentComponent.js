import React from 'react';

const StudentComponent = ({ student }) => {
  return (
    <li className="list-group-item text-right">
      <strong>Name: </strong>
      {student.studentname}
      <strong> Gender:</strong> {student.gender}
      <strong> Level:</strong> {student.classlevel}
      <strong> Home:</strong> {student.homestate}
      <strong> Major: </strong> {student.major}
      <strong> Extra Curricular:</strong> {student.extracurricular}
      <button type="submit" className="btn btn-danger ml-3">
        X
      </button>
    </li>
  );
};

export default StudentComponent;
