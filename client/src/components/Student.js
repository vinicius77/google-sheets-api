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
      <li>
        <strong>Name: </strong>
        {name}
        <strong> Gender:</strong> {gender}
        <strong> Level:</strong> {level}
        <strong> Home:</strong> {homestate}
        <strong> Major: </strong> {major}
        <strong> Extra Curricular:</strong>
        {extracurricular}
      </li>
    </React.Fragment>
  );
};

export default Student;
