import React from 'react';

const Student = ({
  name,
  gender,
  level,
  homestate,
  major,
  extracurricular
}) => {
  return (
    <React.Fragment>
      <li className='list-group-item text-right'>
        <strong>Name: </strong>
        {name}
        <strong> Gender:</strong> {gender}
        <strong> Level:</strong> {level}
        <strong> Home:</strong> {homestate}
        <strong> Major: </strong> {major}
        <strong> Extra Curricular:</strong> {extracurricular}
        <button type='submit' className='btn btn-danger ml-3'>
          X
        </button>
      </li>
    </React.Fragment>
  );
};

export default Student;
