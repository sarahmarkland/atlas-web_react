import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });

  test('should render a div with the class "App-footer"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer.App-footer').exists()).toBe(true);
  });

  // it('should render a div with the class "App-footer"', () => {
  //   const wrapper = shallow(<Footer />);
  //   expect(wrapper.find('div.App-footer').exists()).toBe(true);
  // }
  // );
});
