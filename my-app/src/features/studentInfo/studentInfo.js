import React from 'react';
import Table from 'react-bootstrap/Table'
import Modal  from 'react-modal';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';


import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"




import './index.css';

class StudentInfo extends React.Component {

  state = {
    open: false,
    isAddModalOpen: false,
    isDeleteModalOpen: false,
  }
  componentDidMount() {
    this.props.getStudentMajorListDetails();
    Modal.setAppElement("#root");

    // Modal.setAppElement('#App');
  }

  select = (rec) => {
    this.setState({
      ...rec,
    }, () => {
      this.props.selectStudentRecordDetails(rec);

    })

  }



  renderStudentDetails = () => {
    const { studentList } = this.props;
    return (
      <table>
      <tr>
        <th> Id </th>
        <th>Student Name</th>
        <th>Major</th>
        <th>Graduation Year</th>
        <th> Actions </th>
      </tr>
      {
        studentList && studentList.map((record, index) => {
          return (
            <tr key={index}>
              <td> {record.id} </td>
              <td> {record.firstName} {record.lastName} </td>
              <td> {record.major} </td>
              <td> {record.graduationYear} </td>
              <td>
                <input type="button" name="view/edit" value="view/edit"
                  onClick={() => {
                    this.setState({
                      isOpen: true
                  }, () => {
                    this.select(record)
                  })}}/>
              </td>
            </tr>
          )
        })
      }
    </table>
    );
  }

  updateStudentDetails = () => {
    const {studentList, updateStudentDetails } = this.props;
    const {
      city,
      email,
      firstName,
      graduationYear,
      id,
      lastName,
      linkedinUrl,
      major,
      organizationName,
      dateHired,
      latitude,
      longitude,
      phone,
      role,
      state,
    } = this.state;
    const payload = {
      city,
      email,
      firstName,
      graduationYear,
      id,
      lastName,
      linkedinUrl,
      major,
      organizationName,
      dateHired,
      latitude,
      longitude,
      phone,
      role,
      state,
    };

    updateStudentDetails(payload);
  }

  addStudentDetails = () => {
    const {studentList, addStudentDetails } = this.props;
    const {
      city,
      email,
      firstName,
      graduationYear,
      id,
      lastName,
      linkedinUrl,
      major,
      organizationName,
      dateHired,
      phone,
      role,
      state,
      latitude,
      longitude
    } = this.state;
    let payload = {...this.state};
    console.log('studentList', studentList);
    payload = {
      ...payload,
    }

    this.setState({
      isAddModalOpen: false,
      city: null,
      email: null,
      firstName: null,
      graduationYear: null,
      id: null,
      lastName: null,
      linkedinUrl: '',
      major: '',
      dateHired: '',
      organizationName: '',
      phone: '',
      role: '',
      state: '',
      latitude: '',
      longitude: '',
    }, () => {
      addStudentDetails(payload);
    })

  }

  onChangeSearchFieldText = (
    value,
    category,
  ) => {
    this.setState({
      [category]: value

    })
    // this.props.onChangeSearchFieldText(value, category);
  }

  renderNewModal = () => {
    return (
      <Modal
        isOpen={this.state.isAddModalOpen}
        onRequestClose={() => {
          this.setState({
            isAddModalOpen: false,
          })
        }}
        // contentLabel="My dialog"
      >
        <h2> Student Details </h2>
        <table>
          <tr>
            <td>  Student ID  </td>
            <td>
              <input type="number" value={this.state.id} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'id') }/>
              </td>
          </tr>
          <tr>
            <td>  First Name  </td>
            <td>
              <input type="text" value={this.state.firstName} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'firstName') }/>
            </td>
          </tr>
          <tr>
            <td>  Last Name  </td>
            <td>
              <input type="text" value={this.state.lastName} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'lastName')}/>
            </td>
          </tr>
          <tr>
            <td>  graduationYear  </td>
            <td>
              <input type="text" value={this.state.graduationYear} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'graduationYear')}/>
            </td>
          </tr>
          <tr>
            <td>  Major  </td>
            <td>
              <input type="text" value={this.state.major} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'major')}/>
            </td>
          </tr>
          <tr>
            <td>  City  </td>
            <td>
              <input type="text" value={this.state.city} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'city')}/>
            </td>
          </tr>
          <tr>
            <td>  Email  </td>
            <td>
              <input type="text" value={this.state.email} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'email')}/>
            </td>
          </tr>
          <tr>
            <td>  Role  </td>
            <td>
              <input type="text" value={this.state.role} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'role')}/>
            </td>
          </tr>
          <tr>
            <td>  state  </td>
            <td>
              <input type="text" value={this.state.state} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'state')}/>
            </td>
          </tr>
          <tr>
            <td>  organizationName  </td>
            <td>
              <input type="text" value={this.state.organizationName} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'organizationName')}/>
            </td>
          </tr>
          <tr>
            <td>  dateHired  </td>
            <td>
              <input type="text" value={this.state.dateHired} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'dateHired')}/>
            </td>
          </tr>
          <tr>
            <td>  latitude  </td>
            <td>
              <input type="text" value={this.state.latitude} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'latitude')}/>
            </td>
          </tr>
          <tr>
            <td>  longitude  </td>
            <td>
              <input type="text" value={this.state.longitude} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'longitude')}/>
            </td>
          </tr>
          <tr>
            <td>  Phone  </td>
            <td>
              <input type="text" value={this.state.phone} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'phone')}/>
            </td>
          </tr>
          <tr>
            <td>  linkedinUrl  </td>
            <td>
              <input type="text" value={this.state.linkedinUrl} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'linkedinUrl')}/>
            </td>
          </tr>
        </table>
        <div className="close-modal">
          <button onClick={() => {
            this.setState({
              isAddModalOpen: false,
            })
          }}>
             Exit Details
          </button>
          <button onClick={this.addStudentDetails}>
             Add
          </button>
        </div>
      </Modal>
    );

  }

  deleteRecord = () => {
    console.log('deleteRecord');
    this.setState({
      isDeleteModalOpen: false,
      isOpen: false,
    }, () => {
      this.props.deleteStudentDetails(this.props.studentRecord.id);
    });
  }

  renderDeleteModal = () => {
    console.log('come here!!!', this.state.isDeleteModalOpen);
    return (
      <Button onClick={this.deleteRecord}>  You are </Button>
    );
  }


  renderModal = () => {
    if(!this.props.studentRecord) {
      return null;
    }
    const studentList = this.props.studentList;
    const record = this.props.studentRecord;
    const name = record.firstName;
    const { onChangeSearchFieldText, cacheList } = this.props;
    console.log('record', record);
    return (
      <Modal
        isOpen={this.state.isOpen}
        onRequestClose={() => {
          this.setState({
            isOpen: false,
          })
        }}
        // contentLabel="My dialog"
      >
        <h2> Student Details </h2>
        <table>
          <tr>
            <td>  Student Id  </td>
            <td>
              <input type="text" value={record.id}  disabled/>
            </td>
          </tr>
          <tr>
            <td>  First Name  </td>
            <td>
              <input type="text" value={this.state.firstName} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'firstName', studentList, cacheList) }/>
            </td>
          </tr>
          <tr>
            <td>  Last Name  </td>
            <td>
              <input type="text" value={this.state.lastName} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'lastName', studentList, cacheList)}/>
            </td>
          </tr>
          <tr>
            <td>  graduationYear  </td>
            <td>
              <input type="text" value={this.state.graduationYear} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'graduationYear', studentList, cacheList)}/>
            </td>
          </tr>
          <tr>
            <td>  Major  </td>
            <td>
              <input type="text" value={this.state.major} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'major', studentList, cacheList)}/>
            </td>
          </tr>
          <tr>
            <td>  City  </td>
            <td>
              <input type="text" value={this.state.city} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'city', studentList, cacheList)}/>
            </td>
          </tr>
          <tr>
            <td>  Email  </td>
            <td>
              <input type="text" value={this.state.email} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'email', studentList, cacheList)}/>
            </td>
          </tr>
          <tr>
            <td>  Role  </td>
            <td>
              <input type="text" value={this.state.role} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'role', studentList, cacheList)}/>
            </td>
          </tr>
          <tr>
            <td>  state  </td>
            <td>
              <input type="text" value={this.state.state} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'state', studentList,cacheList)}/>
            </td>
          </tr>
          <tr>
            <td>  organizationName  </td>
            <td>
              <input type="text" value={this.state.organizationName} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'organizationName', studentList, cacheList)}/>
            </td>
          </tr>
          <tr>
            <td>  dateHired  </td>
            <td>
              <input type="text" value={this.state.dateHired} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'dateHired', studentList, cacheList)}/>
            </td>
          </tr>
          <tr>
            <td>  latitude  </td>
            <td>
              <input type="text" value={this.state.latitude} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'latitude', studentList, cacheList)}/>
            </td>
          </tr>
          <tr>
            <td>  longitude  </td>
            <td>
              <input type="text" value={this.state.longitude} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'longitude', studentList, cacheList)}/>
            </td>
          </tr>

          <tr>
            <td>  Phone  </td>
            <td>
              <input type="text" value={this.state.phone} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'phone', studentList, cacheList)}/>
            </td>
          </tr>
          <tr>
            <td>  linkedinUrl  </td>
            <td>
              <input type="text" value={this.state.linkedinUrl} onChange={(e) => this.onChangeSearchFieldText(e.target.value, 'linkedinUrl', studentList, cacheList)}/>
            </td>
          </tr>
        </table>
        <div className="close-modal">
          <button onClick={() => {
            this.setState({
              isDeleteModalOpen: true,
            }, () => {
              this.renderDeleteModal();
            })
          }}>
             Delete
          </button>
          <button onClick={() => {
            this.setState({
              isOpen: false,
            })
          }}>
             Exit Details
          </button>
          <button onClick={this.updateStudentDetails}>
             Update
          </button>
        </div>
        <div className="map-container">
        {this.renderGoogleMap(record.latitude, record.longitude)}
        </div>
        {this.state.isDeleteModalOpen &&
          <Modal
            isOpen={this.state.isDeleteModalOpen}
            onRequestClose={() => {
              this.setState({
                isDeleteModalOpen: false,
                isOpen: false
              })
            }}
            // contentLabel="My dialog"
          >
            <div style={{display: 'flex', 'justify-content': 'center',  'flex-direction': 'column'}}>
              <p style={{'text-align': 'center'}}> Are you sure you want to delete, this action cannot be undone </p>
              <input type="button" value="Delete Record" onClick={this.deleteRecord} style={{width: '100px', 'margin': 'auto'}}/>
            </div>
          </Modal>
        }
      </Modal>
    );
  }

  renderGoogleMap = (latitude, longitude) => {
    const GoogleMapExample = withScriptjs(withGoogleMap(props => (
     <GoogleMap
       defaultCenter = { { lat: parseFloat(latitude), lng: parseFloat(longitude) } }
       defaultZoom = { 5 }
     >
     <Marker position={{ lat: parseFloat(latitude), lng: parseFloat(longitude)}} />
     </GoogleMap>
   )));

   return(
     <div>
       <GoogleMapExample
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCE53vLH34xga-EUcYAhXcBTix3K1lCEGo&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
         containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
         mapElement={ <div style={{ height: `100%` }} /> }
       />
     </div>
  );


  }

  render() {
    const { studentList, onChangeSearchNameText, onChangeSearchMajorText } = this.props;



    return (
      <div className="studentInfo">
       <h2> Student Admin View </h2>
       <div className="studentInputs">
        <input
          type="text"
          name = "Name"
          placeholder="search by name"
          className="studentInputYear"
          onChange={(event) => {this.props.onChangeSearchNameText(event.target.value, studentList)}}
        />
        <span> OR </span>
        <input
          type="text"
          name = "Major"
          placeholder="search by major"
          className="studentInputMajor"
         onChange={(event) => {this.props.onChangeSearchMajorText(event.target.value, studentList)}}
         />
         <input
           type="button"
           name = "Add New User"
           value="Add New Student"
           onClick={()=> {
             this.setState({
               isAddModalOpen: true,
             })
           }}
          />
        </div>
        {this.renderStudentDetails()}
        {this.renderModal()}
        {this.renderNewModal()}
      </div>
    )
  }
}

export default StudentInfo;
