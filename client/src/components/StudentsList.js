import React, { useState, useEffect } from 'react';
// import { Container, ListGroup, ListGroupItem, Button, Label } from 'reactstrap';
import axios from 'axios';
import Student from './Student';

const StudentsList = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStudents();
  }, [loading]);

  const getStudents = async () => {
    await axios
      .get('http://localhost:5000/api/v2/students')
      .then(response => {
        setStudents(response.data);
      })
      .then(setLoading(false))
      .catch(error => {
        setErrorMessage(error);
      });
  };

  if (loading) {
    return <div>... Loading</div>;
  }

  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <React.Fragment>
      <a href="/" className="btn btn-primary mb-3">
        Create
      </a>

      {students.map(student => (
        <Student
          key={student.id}
          name={student.studentname}
          gender={student.gender}
          level={student.classlevel}
          homestate={student.homestate}
          major={student.major}
          extracurricular={student.extracurricularactivity}
        />
      ))}
    </React.Fragment>
  );
};

export default StudentsList;
