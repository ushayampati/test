import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getStudentMajorListDetails,
  // onChangeSearchMajorText,
  // onChangeSearchNameText,
  onChangeSearchFieldText,
  selectStudentRecordDetails,
  updateStudentDetails,
  addStudentDetails,
  deleteStudentDetails,
  onChangeSearchNameText,
  onChangeSearchMajorText,
} from './studentSlice';
import StudentInfo from './studentInfo';

const mapStateToProps = (state) => {
  return {
    studentList: state.student.studentList,
    cacheList: state.student.cacheList,
    studentRecord: state.student.studentRecord,
  };
};
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    getStudentMajorListDetails,
    // onChangeSearchMajorText,
    // onChangeSearchNameText,
    selectStudentRecordDetails,
    updateStudentDetails,
    onChangeSearchFieldText,
    addStudentDetails,
    deleteStudentDetails,
    onChangeSearchNameText,
    onChangeSearchMajorText,
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StudentInfo);
