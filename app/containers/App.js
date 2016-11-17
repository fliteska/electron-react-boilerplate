import React, { PropTypes } from 'react';

import Navbar from '../components/Navbar';

export const AppContainer = ({ children }) => (<div>
  <Navbar />
  {children}
</div>);

AppContainer.propTypes = {
  children: PropTypes.element.isRequired
};

export default AppContainer;
