export default (state, action) => {
  switch (action.type) {
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
