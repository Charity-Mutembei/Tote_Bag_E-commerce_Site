import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ProductGallery from './ProductGallery';

describe('ProductGallery', () => {
  let props;
  let shallowProductGallery;
  let renderedProductGallery;
  let mountedProductGallery;

  const shallowTestComponent = () => {
    if (!shallowProductGallery) {
      shallowProductGallery = shallow(<ProductGallery {...props} />);
    }
    return shallowProductGallery;
  };

  const renderTestComponent = () => {
    if (!renderedProductGallery) {
      renderedProductGallery = render(<ProductGallery {...props} />);
    }
    return renderedProductGallery;
  };

  const mountTestComponent = () => {
    if (!mountedProductGallery) {
      mountedProductGallery = mount(<ProductGallery {...props} />);
    }
    return mountedProductGallery;
  };  

  beforeEach(() => {
    props = {};
    shallowProductGallery = undefined;
    renderedProductGallery = undefined;
    mountedProductGallery = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
