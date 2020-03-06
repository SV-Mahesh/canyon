import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { navbarAction } from '../../Action/assignmentAction';
import { connect } from 'react-redux';

class Sidebars extends Component {
  state = { menu: [], active: 'dashboard' };

  handleNavbar = e => {
    // this.setState({ menu: e.target.id === this.state.menu ? null : e.target.id });
    if (this.state.menu.includes(e.target.id)) {
      var index = this.state.menu.indexOf(e.target.id);
      this.state.menu.splice(index, 1);
      this.setState({ ...this.state.menu, active: e.target.id });
    } else {
      this.setState({ menu: [...this.state.menu, e.target.id], active: e.target.id });
    }
    if (!(e.target.id === 'dash_drop' || e.target.id === 'stud_drop')) {
      this.props.navbarAction(e.target.id);
    }
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">

          <div className="container-fluid">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>

            <Link to='/' className="navbar-brand pt-0">
              <img onClick={this.handleNavbar} id='dashboard' src="image/canyon.png" className="navbar-brand-img" alt="..." />
            </Link>

            <div className="collapse navbar-collapse" id="sidenav-collapse-main">
              <div className="navbar-collapse-header d-md-none">
                <div className="row">
                  <div className="col-6 collapse-brand">
                  </div>
                  <div className="col-6 collapse-close">
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                      <span />
                      <span />
                    </button>
                  </div>
                </div>
              </div>

              <ul className="navbar-nav">

                <li className="nav-item  active ">
                  <div onClick={this.handleNavbar} id='dash_drop' className={this.state.active === 'dash_drop' ? "nav-link active collapsed profileBar" : "nav-link collapsed profileBar"} data-toggle="collapse" aria-expanded="true">
                    <i className="fa fa-home" /> Home<i className="fa fa-caret-down caret-style" />
                  </div>
                  <div id="collapseOne" className={this.state.menu.includes('dash_drop') ? "collapse show" : "collapsing"} >
                    <ul className="list-unstyled text-center">
                      <li>
                        <Link to='/' onClick={this.handleNavbar} id='dashboard 1' className={this.state.active === 'dashboard 1' ? "nav-link active" : "nav-link"}>
                          <i className="fa fa-home" /> Home 1</Link>
                      </li>
                      <li>
                        <Link to='/home_2' onClick={this.handleNavbar} id='dashboard 2' className={this.state.active === 'dashboard 2' ? "nav-link active" : "nav-link"}>
                          <i className="fa fa-home" /> Home 2</Link>
                      </li>
                      <li>
                        <Link to='/home_3' onClick={this.handleNavbar} id='dashboard 3' className={this.state.active === 'dashboard 3' ? "nav-link active" : "nav-link"}>
                          <i className="fa fa-home" /> Home 3</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <div onClick={this.handleNavbar} id='stud_drop' className={this.state.active === 'stud_drop' ? "nav-link active collapsed profileBar" : "nav-link collapsed profileBar"} data-toggle="collapse" href="#collapse2">
                    <i className="fa fa-user" /> Student Registration<i className="fa fa-caret-down caret-style" />
                  </div>
                  <div id="collapse2" className={this.state.menu.includes('stud_drop') ? "collapse show" : "collapsing"}>
                    <ul className="list-unstyled text-center">
                      <li>
                        <Link to='/student_1' onClick={this.handleNavbar} id='student registration 1' className={this.state.active === 'student registration 1' ? "nav-link active" : "nav-link"}>
                          <i className="fa fa-user" /> Registration 1</Link>
                      </li>
                      <li>
                        <Link to='/student_2' onClick={this.handleNavbar} id='student registration 2' className={this.state.active === 'student registration 2' ? "nav-link active" : "nav-link"}>
                          <i className="fa fa-user" /> Registration 2</Link>
                      </li>
                      <li>
                        <Link to='/student_3' onClick={this.handleNavbar} id='student registration 3' className={this.state.active === 'student registration 3' ? "nav-link active" : "nav-link"}>
                          <i className="fa fa-user" /> Registration 3</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <Link to='/assignment' onClick={this.handleNavbar} id='assignments' className={this.state.active === 'assignments' ? "nav-link active" : "nav-link"}>
                    <i className="fa fa-mobile" /> Assignments Setup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/payment' onClick={this.handleNavbar} id='payment batch' className={this.state.active === 'payment batch' ? "nav-link active" : "nav-link"}>
                    <i className="fa fa-money" /> Payment Batch
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/receipt' onClick={this.handleNavbar} id='receipt and refunds' className={this.state.active === 'receipt and refunds' ? "nav-link active" : "nav-link"}>
                    <i className="fa fa-thumbs-up" /> Receipts and Refunds
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/accounts' onClick={this.handleNavbar} id='student accounts' className={this.state.active === 'student accounts' ? "nav-link active" : "nav-link"}>
                    <i className="fa fa-lock" /> Student Accounts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/assignment_data' onClick={this.handleNavbar} id='assignment data entry' className={this.state.active === 'assignment data entry' ? "nav-link active" : "nav-link"}>
                    <i className="fa fa-book" /> Assignments Data Entry
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/course' onClick={this.handleNavbar} id='course grades' className={this.state.active === 'course grades' ? "nav-link active" : "nav-link"}>
                    <i className="fa fa-percent" /> Course Grades
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/transcripts' onClick={this.handleNavbar} id='printing of transcripts' className={this.state.active === 'printing of transcripts' ? "nav-link active" : "nav-link"}>
                    <i className="fa fa-print" /> Printing of Transcripts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/certificates' onClick={this.handleNavbar} id='printing of certificates' className={this.state.active === 'printing of certificates' ? "nav-link active" : "nav-link"}>
                    <i className="fa fa-print" /> Printing of Certificates
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/id_cards' onClick={this.handleNavbar} id='student id cards' className={this.state.active === 'student id cards' ? "nav-link active" : "nav-link"}>
                    <i className="fa fa-id-card" /> Student ID Cards
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/entries' onClick={this.handleNavbar} id='account general entries' className={this.state.active === 'account general entries' ? "nav-link active" : "nav-link"}>
                    <i className="fa fa-pencil" /> Account General Entries
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/user' onClick={this.handleNavbar} id='user maintanance' className={this.state.active === 'user maintanance' ? "nav-link active" : "nav-link"}>
                    <i className="fa fa-wrench" /> User Maintanance
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/course_detail' onClick={this.handleNavbar} id='setting up of course detail' className={this.state.active === 'setting up of course detail' ? "nav-link active" : "nav-link"}>
                    <i className="fa fa-thumbs-up" /> Setting Up of Course Detail
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/grades' onClick={this.handleNavbar} id='setting up grades' className={this.state.active === 'setting up grades' ? "nav-link active" : "nav-link"}>
                    <i className="fa fa-pencil" /> Setting up Grades
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  navbarAction: name => dispatch(navbarAction(name))
})

export default connect(null, mapDispatchToProps)(Sidebars);