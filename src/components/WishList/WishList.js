import React from 'react';
import PropTypes from 'prop-types';
import styles from './WishList.scss';

const WishList = props => (
	<div>This is a component called WishList.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class WishList extends React.Component {
//   render() {
//     return <div>This is a component called WishList.</div>;
//   }
// }

const WishListPropTypes = {
	// always use prop types!
};

WishList.propTypes = WishListPropTypes;

export default WishList;
