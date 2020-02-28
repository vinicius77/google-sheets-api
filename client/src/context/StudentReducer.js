const initialState = {
  students: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_STUDENTS':
      return {
        ...state,
        error: null,
        loading: false,
        students: action.payload
      };
    case 'ADD_STUDENT':
      return {
        ...state,
        error: null,
        loading: false,
        students: [action.payload, ...state.students]
      };

    case 'GET_ERROR':
      return { ...state, students: {}, loading: false, error: action.payload };
    case 'DELETE_STUDENT':
      return {
        ...state,
        students: state.students.filter(
          student => student.id !== action.payload
        )
      };

    default:
      return state;
  }
};
