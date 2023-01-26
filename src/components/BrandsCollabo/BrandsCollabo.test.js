import React from 'react';
import { shallow, render, mount } from 'enzyme';
import BrandsCollabo from './BrandsCollabo';

describe('BrandsCollabo', () => {
  let props;
  let shallowBrandsCollabo;
  let renderedBrandsCollabo;
  let mountedBrandsCollabo;

  const shallowTestComponent = () => {
    if (!shallowBrandsCollabo) {
      shallowBrandsCollabo = shallow(<BrandsCollabo {...props} />);
    }
    return shallowBrandsCollabo;
  };

  const renderTestComponent = () => {
    if (!renderedBrandsCollabo) {
      renderedBrandsCollabo = render(<BrandsCollabo {...props} />);
    }
    return renderedBrandsCollabo;
  };

  const mountTestComponent = () => {
    if (!mountedBrandsCollabo) {
      mountedBrandsCollabo = mount(<BrandsCollabo {...props} />);
    }
    return mountedBrandsCollabo;
  };  

  beforeEach(() => {
    props = {};
    shallowBrandsCollabo = undefined;
    renderedBrandsCollabo = undefined;
    mountedBrandsCollabo = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
