import React, { Component } from 'react'
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';
import { addassignment } from '../../../Action/assignmentAction'

class List extends Component {
  state = { data: null, deleteModal: false, id: null, deleted: false, delLoad: null }
  componentDidMount() {
    axios.get('http://167.172.242.107:8282/ps/assesments').then((res) => {
      if (res.status === 200) {
        this.props.addassignment(res.data);
        this.setState({ data: res.data });
      }
    });
  }

  deleteHandle = e => {
    this.setState({ deleteModal: true, id: e.target.id });
  }

  deleteRecord = e => {
    e.preventDefault();
    this.setState({ deleteModal: false, delLoad: true })
    axios.delete('http://167.172.242.107:8282/ps/assesments/' + this.state.id).then((res) => {
      if (res.status === 200) {
        this.props.addassignment(res.data);
        this.setState({ deleted: true, delLoad: false });
        setTimeout(() => {
          this.setState({ deleted: false });
        }, 4000);
      }
    });
  }

  render() {
    // console.log(this.props.list)
    // const data = this.state.data;
    let { list } = this.props;
    let fullList = list ? list.map((value, i) => {
      return (<tr key={i}>
        <td>{i + 1}</td>
        <td>{value.course}</td>
        <td>{value.weight}</td>
        <td>{value.totalmarks}</td>
        <td>{moment(value.dueDate).format('DD/MM/YYYY')}</td>
        <td>{this.state.id === value.assId ?
          <button onClick={this.deleteHandle} id={value.assId} type="button" className="btn btn-dark btn-sm"><i className="fa fa-trash" /> Deleting</button>
          : <button onClick={this.deleteHandle} id={value.assId} type="button" className="btn btn-danger btn-sm"><i className="fa fa-trash" /> Delete</button>}</td>
      </tr>)
    }) : null;
    return (
      <div>
        {this.state.deleted ?
          <div className="alert alert-danger" role="alert">
            Record Deleted...!
        </div>
          : null
        }
        <div className="row">
          <div className="col-lg-12 col-md-12 mt-3">
            <div className="table-responsive">
              <table className="table align-items-center table-flush">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">No:</th>
                    <th scope="col">Assignments</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Marks</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {fullList}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row mt-3 justify-content-center">
          <div className="col-lg-3 col-md-8">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                  <div className="page-link" tabIndex={-1}>
                    <i className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </div>
                </li>
                <li className="page-item"><div className="page-link profileBar" >1</div></li>
                <li className="page-item active"><div className="page-link profileBar" >2</div></li>
                <li className="page-item"><div className="page-link profileBar" >3</div></li>
                <li className="page-item profileBar">
                  <div className="page-link">
                    <i className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div id="myModal" className={this.state.deleteModal ? "modal d-block" : "modal"} tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 id="myModalLabel">Are You Sure to Delete?</h3>
                <button type="button" onClick={() => this.setState({ deleteModal: false, id: null })} className="close" data-dismiss="modal" aria-hidden="true">×</button>
              </div>
              <div className="modal-footer">
                <button onClick={() => this.setState({ deleteModal: false, id: null })} className="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                <button onClick={this.deleteRecord} className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}

const mapStateToProps = state => ({
  list: state.assignmentList.list,
});

const mapDispatchToProps = (dispatch) => ({
  addassignment: (list) => dispatch(addassignment(list))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);