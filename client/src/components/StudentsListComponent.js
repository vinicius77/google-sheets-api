import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import StudentComponent from './StudentComponent';
import CreateStudent from './CreateStudent';

const StudentsListComponent = () => {
  const { students } = useContext(GlobalContext);
  const { getStudents } = useContext(GlobalContext);

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <React.Fragment>
      <h3>Dummy Students</h3>

      <ul>
        {students.map(student => (
          <StudentComponent key={student.id} student={student} />
        ))}
      </ul>
      <CreateStudent />
    </React.Fragment>
  );
};

export default StudentsListComponent;
