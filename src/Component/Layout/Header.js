import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  capital = (string) => {
    return string.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  render() {
    // console.log(this.props)
    return (
      <div>
        <div className="row ">
          <div className="col">
            <h2 className="mb-1">{this.capital(this.props.navbar)} Setup</h2>
            <h6 className="text-uppercase text-muted ls-1 mb-0">Check for {this.props.navbar} Setup</h6>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  navbar: state.navbar.navbar
});

export default connect(mapStateToProps, null)(Header);