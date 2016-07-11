import React, { Component } from 'react';
import Home from '../components/Home';
import { Link } from 'react-router';

export default class HomePage extends Component {
  render() {
    return (
	    <div>
	      <Home />
	      <Link to="/match">Go to Match Screen</Link>
	    </div>
    );
  }
}