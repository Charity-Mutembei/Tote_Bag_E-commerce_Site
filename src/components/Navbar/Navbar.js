import React from 'react';
// import PropTypes from 'prop-types';
import './Navbar.css';
import WhiteBackgroundLogo from './Assets/BusinessLogo/1.png'

const Navbar = props => (
	<div className='mainSection'>
		<div className='grid-template1'>
			<div className='brandLogo'>
				<img src={WhiteBackgroundLogo} alt='BrandLogo'/>
			</div>
		</div>
		<div className='grid-template'>
			<span className='About'>
			<a href='#About'> About </a>
			</span>
		</div>
		<div className='grid-template'>
		<a href='#About'> Feature </a>
		</div>
		<div className='grid-template'>
		<a href='#About'> Testimonies </a>
		</div>
		<div className='grid-template'>
		<a href='#About'> Pricing </a>
		</div>
		<div className='grid-template'>
		<a href='#About'> Resources </a>
		</div>
		<div className='grid-template'>
			<button href="#Shop"> Get Started </button>
		</div>
	</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Navbar extends React.Component {
//   render() {
//     return <div>This is a component called Navbar.</div>;
//   }
// }

// const NavbarPropTypes = {
// 	// always use prop types!
// };

// Navbar.propTypes = NavbarPropTypes;

export default Navbar;
