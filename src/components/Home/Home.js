import React from 'react';
// import PropTypes from 'prop-types';
import homePageCover from './Assets/HomeBag.jpeg'
import './Home.css';

const Home = props => (
	<div className='motherSection'>
		<div className='container1'>
		<div className='grid-template1'>
			<img src={homePageCover} alt="HomePageCoverImage"/>
		</div>
		<div className='grid-template' id='secondPart'>
			<div className='firstHeading'>
				<h1>We Totes Have It!</h1>
			</div>
			<div className='explanationParagraph'>
				<p>
					Elevate your everyday by carrying your 
					essentials in style with our durable and 
					trendy tote bags!
				</p>
			</div>
			<div className='homePageButton'>
				<button href="#GetStarted"> GET STARTED </button>
			</div>
		</div>
		</div>

	</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Home extends React.Component {
//   render() {
//     return <div>This is a component called Home.</div>;
//   }
// }

// const HomePropTypes = {
// 	// always use prop types!
// };

// Home.propTypes = HomePropTypes;

export default Home;
