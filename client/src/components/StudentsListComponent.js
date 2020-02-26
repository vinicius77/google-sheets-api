import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import StudentComponent from './StudentComponent';

const StudentsListComponent = () => {
  const { students, getStudents } = useContext(GlobalContext);

  useEffect(() => {
    getStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <h3>Dummy Students</h3>

      <ul>
        {students.map(student => (
          <StudentComponent key={student.id} student={student} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default StudentsListComponent;
