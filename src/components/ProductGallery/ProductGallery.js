import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductGallery.scss';

const ProductGallery = props => (
	<div>This is a component called ProductGallery.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class ProductGallery extends React.Component {
//   render() {
//     return <div>This is a component called ProductGallery.</div>;
//   }
// }

const ProductGalleryPropTypes = {
	// always use prop types!
};

ProductGallery.propTypes = ProductGalleryPropTypes;

export default ProductGallery;
