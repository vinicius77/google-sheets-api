import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import StudentComponent from './StudentComponent';
import Loading from './Loading';

const StudentsList = () => {
  const { students, getStudents, error, loading } = useContext(GlobalContext);

  useEffect(() => {
    getStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <React.Fragment>
        <Loading />
      </React.Fragment>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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

export default StudentsList;
