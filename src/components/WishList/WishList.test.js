import React from 'react';
import { shallow, render, mount } from 'enzyme';
import WishList from './WishList';

describe('WishList', () => {
  let props;
  let shallowWishList;
  let renderedWishList;
  let mountedWishList;

  const shallowTestComponent = () => {
    if (!shallowWishList) {
      shallowWishList = shallow(<WishList {...props} />);
    }
    return shallowWishList;
  };

  const renderTestComponent = () => {
    if (!renderedWishList) {
      renderedWishList = render(<WishList {...props} />);
    }
    return renderedWishList;
  };

  const mountTestComponent = () => {
    if (!mountedWishList) {
      mountedWishList = mount(<WishList {...props} />);
    }
    return mountedWishList;
  };  

  beforeEach(() => {
    props = {};
    shallowWishList = undefined;
    renderedWishList = undefined;
    mountedWishList = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
