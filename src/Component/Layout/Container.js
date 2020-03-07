import React, { Component } from 'react';
import Assignment from '../Pages/Assingment/Assignment';
import { Route } from 'react-router-dom';
import Home1 from '../Pages/Home/Home1';
import Home2 from '../Pages/Home/Home2';
import Home3 from '../Pages/Home/Home3';
import Header from './Header';
import Student3 from '../Pages/Student Registration/Student3';
import Student2 from '../Pages/Student Registration/Student2';
import Student1 from '../Pages/Student Registration/Student1';
import Accounts from '../Pages/Others/Accounts';
import AssignmentData from '../Pages/Others/AssignmentData';
import Certificates from '../Pages/Others/Certificates';
import Course from '../Pages/Others/Course';
import CourseDetail from '../Pages/Others/CourseDetail';
import Entries from '../Pages/Others/Entries';
import Grades from '../Pages/Others/Grades';
import IDCards from '../Pages/Others/IDCards';
import Payment from '../Pages/Others/Payment';
import Receipt from '../Pages/Others/Receipt';
import Transcripts from '../Pages/Others/Transcripts';
import User from '../Pages/Others/User';


class Container extends Component {
  render() {
    return (
      <div>
        <div className="header bg-blue-clr pb-8 pt-5 pt-md-8">
          <div className="container-fluid">
            <div className="header-body">
            </div>
          </div>
        </div>
        <div className="container-fluid mt--7">
          <div className="row">
            <div className="col-xl-12">
              <div className="card bg-secondary shadow ">
                <div className="card-header bg-transparent">
                  <Header />
                </div>
                <Route path='/grades'><Grades /></Route>
                <Route path='/course_detail'><CourseDetail /></Route>
                <Route path='/user'><User /></Route>
                <Route path='/entries'><Entries /></Route>
                <Route path='/id_cards'><IDCards /></Route>
                <Route path='/certificates'><Certificates /></Route>
                <Route path='/transcripts'><Transcripts /></Route>
                <Route path='/course'><Course /></Route>
                <Route path='/assignment_data'><AssignmentData /></Route>
                <Route path='/accounts'><Accounts /></Route>
                <Route path='/receipt'><Receipt /></Route>
                <Route path='/payment'><Payment /></Route>
                <Route path='/assignment_setup'><Assignment /></Route>
                <Route path='/student_3'><Student3 /></Route>
                <Route path='/student_2'><Student2 /></Route>
                <Route path='/student_1'><Student1 /></Route>
                <Route path='/home_3'><Home3 /></Route>
                <Route path='/home_2'><Home2 /></Route>
                <Route exact path='/' ><Home1 /></Route>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Container;