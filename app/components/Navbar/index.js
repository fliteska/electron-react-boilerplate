import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classnames from 'classnames';

export const Navbar = ({ currentPage }) => {
  const links = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'fa-dashboard',
      url: '/'
  },
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'fa-dashboard',
      url: '/'
  },
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'fa-dashboard',
      url: '/'
  },
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'fa-dashboard',
      url: '/'
  }
  ];
  const mappedLinks = links.map((l, i) => (<li key={i}>
    <Link to={l.url} className={classnames({ 'is-current': (l.url === currentPage) })}>
      <i className={classnames({ 'fa fa-4x': true, [l.icon]: true })} />
      {l.label}
    </Link>
  </li>));

  return (<ul className="dc-navbar">{mappedLinks}</ul>);
};

Navbar.propTypes = {
  currentPage: PropTypes.string
};

const connected = connect(state => ({
  currentPage: state.routing.locationBeforeTransitions.pathname,
}), {

})(Navbar);
export default connected;
