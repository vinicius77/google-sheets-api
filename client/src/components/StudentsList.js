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
      <h3>Students List</h3>
      <hr />
      <a href="/create" className="btn btn-info">
        Create
      </a>
      <hr />
      <ul>
        {students.map(student => (
          <StudentComponent key={student.id} student={student} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default StudentsList;
