import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.scss';

const Home = props => (
	<div>This is a component called Home.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Home extends React.Component {
//   render() {
//     return <div>This is a component called Home.</div>;
//   }
// }

const HomePropTypes = {
	// always use prop types!
};

Home.propTypes = HomePropTypes;

export default Home;
