import React from 'react';
import Logo from './Assets/1.png';
import './Footer.css';

const Footer = props => (
	<>
		<div className='generalFooterSection'>
		<div className='grid-template' id='logoFooter'>
			<img src={Logo} alt="Logo" id='logoFooterImage'/>
		</div>
		<div className='grid-template'>
			<div className='columnHeading'>
				<h3>
				Company
				</h3>
			</div>
			<div className='columnContent'>
				<p>
				How it works
				</p>
			</div>
			<div className='columnContent1'>
				<p>
				Pricing
				</p>
			</div>
			<div className='columnContent2'>
				<p>
				Docs
				</p>
			</div>
		</div>
		<div className='grid-template'>
			<div className='columnHeading'>
					<h3>
					Resources
					</h3>
				</div>
				<div className='columnContent'>
					<p>
					Blog post name list goes here
					</p>
				</div>
				<div className='columnContent1'>
					<p>
					Blog post name list goes here
					</p>
				</div>
				<div className='columnContent1b'>
					<p>
					Blog post name list goes here
					</p>
				</div>
				<div className='columnContent2'>
					<p>
					See all resources >
					</p>
				</div>
			</div>
		<div className='grid-template'>
			<div className='columnHeading'>
					<h3>
					About
					</h3>
				</div>
				<div className='columnContent'>
					<p>
					Terms & Conditions
					</p>
				</div>
				<div className='columnContent1'>
					<p>
					Privacy policy
					</p>
				</div>
				<div className='columnContent2'>
					<div className='iconSection'>
						<div className='column-template'>
						<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334c0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518a3.301 3.301 0 0 0 1.447-1.817a6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429a3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218a3.203 3.203 0 0 1-.865.115a3.23 3.23 0 0 1-.614-.057a3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>
						</div>
						<div className='column-template'>
						<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4V8.969ZM2.57 21.83h4V8.799h-4V21.83ZM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803Z" clip-rule="evenodd"/></svg>
						</div>
						<div className='column-template'>
						<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"/></svg>
						</div>
					</div>
				</div>
			</div>

	
	</div>
	<div className='sectionCopyright'>
			<p>
			Copyright © 2021 Company name
			</p>
		</div>

	</>
);


const FooterPropTypes = {
	// always use prop types!
};

Footer.propTypes = FooterPropTypes;

export default Footer;
