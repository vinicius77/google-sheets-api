import React from 'react';

class CreateStudent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studentname: '',
      gender: '',
      classlevel: '',
      homestate: '',
      major: '',
      extracurricularactivity: ''
    };
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const {
      studentname,
      gender,
      classlevel,
      homestate,
      major,
      extracurricularactivity
    } = this.state;

    return (
      <React.Fragment>
        <h1 className='text-center mb-3'>Create Student </h1>
        <form onSubmit={this.onSubmitHandler} className='mb-4'>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='studentname'
              className='form-control'
              value={studentname}
              onChange={this.inputHandler}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='gender'>Gender</label>
            <input
              type='text'
              name='gender'
              className='form-control'
              value={gender}
              onChange={this.inputHandler}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='classlevel'>Level</label>
            <input
              type='text'
              name='classlevel'
              className='form-control'
              value={classlevel}
              onChange={this.inputHandler}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='homestate'>Home</label>
            <input
              type='text'
              name='homestate'
              className='form-control'
              value={homestate}
              onChange={this.inputHandler}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='major'>Major</label>
            <input
              type='text'
              name='major'
              className='form-control'
              value={major}
              onChange={this.inputHandler}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='extracurricularactivity'>Extra Curricular</label>
            <input
              type='text'
              name='extracurricularactivity'
              className='form-control'
              value={extracurricularactivity}
              onChange={this.inputHandler}
            />
          </div>

          <input
            type='submit'
            className='btn btn-primary btn-block'
            value='Add Student'
          />
        </form>
      </React.Fragment>
    );
  }
}

export default CreateStudent;
