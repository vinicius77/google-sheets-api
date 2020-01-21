import React from 'react';
import { Container, ListGroup, ListGroupItem, Button, Label } from 'reactstrap';
import uuid from 'uuid';

class StudentsList extends React.Component {
  state = {
    students: [
      {
        id: uuid.v4(),
        name: 'Vinicius',
        gender: 'Male',
        classlevel: '5. Senior',
        homestate: 'CA',
        major: 'BsC',
        extracurricularactivity: 'Football'
      },
      {
        id: uuid.v4(),
        name: 'Kako',
        gender: 'Male',
        classlevel: '1. Freshman',
        homestate: 'NY',
        major: 'Arts',
        extracurricularactivity: 'Volunteering'
      }
    ]
  };

  render() {
    const { students } = this.state;
    return (
      <React.Fragment>
        <Container>
          <Button
            color='primary'
            style={{ marginBottom: '2rem' }}
            onClick={() => {
              const name = prompt('Enter Student');
              if (name) {
                this.setState(state => ({
                  students: [...state.students, { id: uuid.v4(), name }]
                }));
              }
            }}
          >
            Add Student
          </Button>

          <ListGroup>
            {students.map(
              ({
                id,
                name,
                gender,
                classlevel,
                major,
                extracurricularactivity,
                homestate
              }) => (
                <ListGroupItem key={id}>
                  <Button
                    className='remove-button'
                    color='danger'
                    size='sm'
                    onClick={() => {
                      this.setState(state => ({
                        students: state.students.filter(
                          student => student.id !== id
                        )
                      }));
                    }}
                  >
                    &times;
                  </Button>
                  <Label>Name: {name}</Label>
                  <Label>Gender: {gender}</Label>
                  <Label>Level: {classlevel}</Label>
                  <Label>State: {homestate}</Label>
                  <Label>Major: {major}</Label>
                  <Label>Extra Curricular: {extracurricularactivity}</Label>
                </ListGroupItem>
              )
            )}
          </ListGroup>
        </Container>
      </React.Fragment>
    );
  }
}

export default StudentsList;
