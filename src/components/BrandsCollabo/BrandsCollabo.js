import React from 'react';
import PropTypes from 'prop-types';
import styles from './BrandsCollabo.scss';

const BrandsCollabo = props => (
	<div>This is a component called BrandsCollabo.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class BrandsCollabo extends React.Component {
//   render() {
//     return <div>This is a component called BrandsCollabo.</div>;
//   }
// }

const BrandsCollaboPropTypes = {
	// always use prop types!
};

BrandsCollabo.propTypes = BrandsCollaboPropTypes;

export default BrandsCollabo;
