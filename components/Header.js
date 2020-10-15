import React, { Component } from 'react';
import Link from 'next/link';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col text-left">
            <h3 className="text-success">
              <img
                style={{ height: 70 }}
                src="/static/images/logo/logo.png"
                alt=""
              />
              Res &amp; Caf
            </h3>
          </div>
          <div className="col text-right">
            <h6 className="text-muted mt-4">
              {this.state.date.toLocaleDateString() +
                ' ' +
                this.state.date.toLocaleTimeString()}
            </h6>
            <ul className="list-inline">
              <li className="list-inline-item title">
                <Link href="/">หน้าหลัก</Link>
              </li>
              <li className="list-inline-item title">|</li>
              <li className="list-inline-item title">
                <Link href="/about">เกี่ยวกับเรา</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Header;
