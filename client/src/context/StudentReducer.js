const initialState = {
  students: [
    {
      id: 1,
      studentname: 'Charles',
      gender: 'Male',
      classlevel: '3. Senior',
      homestate: 'CA',
      major: 'Data Science',
      extracurricularactivity: 'AI'
    },
    {
      id: 2,
      studentname: 'Sofia',
      gender: 'Female',
      classlevel: '2. Freshman',
      homestate: 'LI',
      major: 'Business',
      extracurricularactivity: 'Music'
    },
    {
      id: 3,
      studentname: 'Vinicius',
      gender: 'Male',
      classlevel: '1. Junior',
      homestate: 'SP',
      major: 'BsC',
      extracurricularactivity: 'Football'
    },
    {
      id: 4,
      studentname: 'Hanna',
      gender: 'Female',
      classlevel: '2. Sophmore',
      homestate: 'HE',
      major: 'Business',
      extracurricularactivity: 'Games'
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_STUDENTS':
      return { ...state, loading: false, students: action.payload };
    case 'GET_ERROR':
      return { ...state, loading: false, error: action.payload };

    case 'DELETE_STUDENT':
      return {
        ...state,
        students: state.students.filter(
          student => student.id !== action.payload
        )
      };
    case 'ADD_STUDENT':
      return { ...state, students: [action.payload, ...state.students] };
    default:
      return state;
  }
};
