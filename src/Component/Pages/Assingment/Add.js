import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { connect } from 'react-redux';
import { addassignment } from '../../../Action/assignmentAction';

class Add extends Component {
  state = { load: false, submit: false, error: false, duedate: new Date(), course: '1003 - Certificate in Business', unit: '1003 - Certificate in Business', programme: 'Certificate Courses', rego: 'Semester 1', year: '2015', exam: '', weight: '', marks: '', desc: '' };

  updateValue = (e) => this.setState({ [e.target.name]: e.target.value })

  selectHandle = (e, { name, value }) => this.setState({ [name]: value })

  handleChange = date => {
    this.setState({
      duedate: date
    });
  };

  handleSubmit = (e) => {
    // console.log(this.state);
    this.setState({ load: true });
    const { course, duedate, exam, programme, unit, rego, weight, marks, desc } = this.state;
    // if (course && duedate && exam && programme && unit && rego && year && weight && marks && desc) {
    axios.post('http://167.172.242.107:8282/ps/assesments',
      {
        course: course,
        dueDate: duedate,
        examcode: exam,
        note: desc,
        program: programme,
        semester: rego,
        totalmarks: marks,
        units: unit,
        weight: weight
      }
    ).then((res) => {
      if (res.status === 200) {
        // console.log(res.data)
        this.props.addassignment(res.data);
        this.setState({ load: false, submit: true, duedate: new Date(), course: '1003 - Certificate in Business', unit: '1003 - Certificate in Business', programme: 'Certificate Courses', rego: 'Semester 1', year: '2015', exam: '', weight: '', marks: '', desc: '' });
        setTimeout(() => {
          this.setState({ submit: false });
        }, 4000);
      }
    });
    // } else {
    //   this.setState({ error: true, load: false });
    //   setTimeout(() => {
    //     this.setState({ error: false })
    //   }, 4000);
    // }

  }

  render() {
    return (
      <form>
        {this.state.submit ?
          <div className="alert alert-success" role="alert">
            Record Created Successfully...!
          </div>
          : null
        }
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="form-group">
              <label className="label-style">Select Programme</label>
              <select className="form-control form-control-alternative" name='programme' onChange={this.updateValue}>
                <option value='Certificate Courses'>Certificate Courses</option>
                <option value='CIB-Certificate in Business'>CIB-Certificate in Business</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="form-group">
              <label className="label-style">Course List</label>
              <select className="form-control form-control-alternative" name='course' onChange={this.updateValue}>
                <option value='CHRM - Certificate in Human Resourse Management'>CHRM - Certificate in Human Resourse Management</option>
                <option value='CIA - Certificate in Accounting'>CIA - Certificate in Accounting</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="form-group">
              <label className="label-style">Units List</label>
              <select className="form-control form-control-alternative" name='unit' onChange={this.updateValue}>
                <option value='1003 - Certificate in Business'>1003 - Certificate in Business</option>
                <option value='1002 - Business Communication'>1002 - Business Communication</option>
                <option value='1012 - Business Accounting'>1012 - Business Accounting</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="form-group">
              <label className="label-style">Rego Period</label>
              <select className="form-control form-control-alternative" name='rego' onChange={this.updateValue}>
                <option value='Semester 1'>Semester 1</option>
                <option value='Semester 2'>Semester 2</option>
              </select>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <label className="label-style">Year</label>
            <input type="text" name='year' onChange={this.updateValue} defaultValue={2015} className="form-control form-control-alternative" placeholder='2015' />
          </div>
          <div className="col-lg-2 col-md-6">
            <label className="label-style">Course</label>
            <div className="mt-2">CIB</div>
          </div>
          <div className="col-lg-4 col-md-6">
            <label className="label-style">Unit Code</label>
            <div className="mt-2">1003 - Miscrosoft Office training</div>
          </div>
          <div className="col-lg-3 col-md-6">
            <label className="label-style">Exam Code</label>
            <input type="text" name='exam' onChange={this.updateValue} value={this.state.exam} className="form-control form-control-alternative" placeholder='' />
          </div>
          <div className="col-lg-3 col-md-6">
            <label className="label-style">Weight</label>
            <input type="text" name='weight' onChange={this.updateValue} value={this.state.weight} className="form-control form-control-alternative" placeholder='' />
          </div>
          <div className="col-lg-3 col-md-6">
            <label className="label-style">Total Marks</label>
            <input type="text" name='marks' onChange={this.updateValue} value={this.state.marks} className="form-control form-control-alternative" placeholder='' />
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="form-group">
              <label className="label-style">Due Date</label><br></br>
              <DatePicker label='Due Date' name='duedate' className="form-control form-control-alternative" selected={this.state.duedate} onSelect={this.selectHandle} onChange={this.handleChange} />
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <label className="label-style">Description</label>
              <textarea type="text" name='desc' value={this.state.desc} onChange={this.updateValue} className="form-control form-control-alternative" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center  mt-3 mb-4">
          <div className="col-lg-12 text-center col-md-12 btn-style-bk">
            {/* <a href="#" className="btn  btn-primary">Add New</a> */}
            {this.state.load ?
              <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
              </button>
              :
              <input type='submit' onClick={this.handleSubmit} value="Add New" className='btn btn-primary' />
            }
          </div>
        </div>
      </form>
    )
  }
}

// const mapStateToProps=state=>({
//   list:state.assignmentList.list,
// })

const mapDispatchToProps = dispatch => ({
  addassignment: (list) => dispatch(addassignment(list))
});

export default connect(null, mapDispatchToProps)(Add);