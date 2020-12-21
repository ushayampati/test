import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const studentSlice = createSlice({
  name: 'student',
  initialState: {
    major: '',
    graduationYear: '',
    city: '',
    email: '',
    firstName: '',
    lastName: '',
    state: '',
    role: '',
    phone: '',
    studentList: null,
    studentRecord: null,
    cacheList: null,
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    updateStudentMajor: (state, action) => {
      return {
        ...state,
        major: action.payload,

      }
    },
    updateField: (state, action, category) => {
      const val = state[action.payload.category];
      return {
        ...state,
          [action.payload.category]: action.payload.value,
      };
    },
    updateGraduationYear: (state, action) => {
      return {
        ...state,
        graduationYear: action.payload,

      }
    },
    getStudentMajorList: (state, action) => {
      return {
        ...state,
        studentList: action.payload,
        cacheList: action.payload,
      }
    },
    selectStudentRecord: (state, action) => {
      return {
        ...state,
        studentRecord: action.payload,
      }
    }
  },
});

export const { updateGraduationYear, updateStudentMajor, getStudentMajorList, selectStudentRecord, updateField, cacheList} =  studentSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const updateGraduationDetails = year => dispatch => {
    dispatch(updateGraduationYear(year));
};

export const updateStudentMajorDetails = major => dispatch => {
    dispatch(updateStudentMajor(major));
};

export const updateStudentDetails = (payload) => dispatch => {
  const headers = {
      'Content-Type': 'text/plain'
   };
  axios({
   method: 'put',
   url: `http://localhost:8988/student/careerinfo/${payload.id}/`,
   headers: { 'Content-Type': 'application/json' },
   responseType: '*',
   data: {
     ...payload
   }
 })
  .then(function (response) {
    if(response.status === 200) {
      dispatch(getStudentMajorListDetails(''));
    }
  });
};

export const addStudentDetails = (payload) => dispatch => {
  const headers = {
      'Content-Type': 'text/plain'
   };
  axios({
   method: 'post',
   url: `http://localhost:8988/student/careerinfo`,
   headers: { 'Content-Type': 'application/json' },
   responseType: '*',
   data: {
     ...payload
   }
 })
  .then(function (response) {
    if(response.status === 200) {
      dispatch(getStudentMajorListDetails(''));
    }
  });
};

export const deleteStudentDetails = (id) => dispatch => {
  const headers = {
      'Content-Type': 'text/plain'
   };
  const url = `http://localhost:8988/student/careerinfo/${id}`;
  axios.delete(url, {
   headers: { 'Content-Type': 'application/json' },
   responseType: '*',
   data: {
    id,
   }
 })
  .then(function (response) {
    if(response.status === 200) {
      dispatch(getStudentMajorListDetails(''));
    }
  });
};

export const getStudentMajorListDetails = major => dispatch => {
  const url = 'http://localhost:8988/student/careerinfo';
  axios({
   method: 'get',
   url,
   headers: { 'Content-Type': 'application/json' },
   responseType: 'application/json',
 })
  .then((res) => {
    dispatch(getStudentMajorList(res.data));
  })
};

export const selectStudentRecordDetails = record => dispatch => {
  dispatch(selectStudentRecord(record));
};

export const onChangeSearchFieldText = (text, category, studentList, cacheList) => dispatch => {
    const val = {
      category,
      value:text
    };
    dispatch(updateField(val));
}

export const onChangeSearchMajorText = (text, studentList) => dispatch => {
  if(text !== '') {
    const filterStudentList = studentList.filter((record) => {
      const major = record.major.replace(' ', '');
      const searchText =text.replace(' ', '');
      return major.trim().toLowerCase().includes(searchText.trim().toLowerCase())
    });
    dispatch(getStudentMajorList(filterStudentList));
  } else {
    dispatch(getStudentMajorListDetails(''));
  }
}

export const onChangeSearchNameText = (text, studentList) => dispatch => {
  if(text !== '') {
    const filterStudentList = studentList.filter((record) => {
      const name = record.firstName.replace(' ', '');
      const searchText =text.replace(' ', '');
      return name.trim().toLowerCase().includes(searchText.trim().toLowerCase())
    });
    dispatch(getStudentMajorList(filterStudentList));
  } else {
    dispatch(getStudentMajorListDetails(''));
  }
}



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export default studentSlice.reducer;
