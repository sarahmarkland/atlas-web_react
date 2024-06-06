import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Footer Component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: false }} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the text "Copyright"', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: false }} />);
    expect(wrapper.text()).toContain('Copyright');
  });

  it('should render a footer with the class "App-footer"', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: false }} />);
    expect(wrapper.find('footer.App-footer').exists()).toBe(true);
  });

  it('should not display the contact link when the user is logged out', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: false }} />);
    expect(wrapper.find('#contact-link').exists()).toBe(false);
  });

  it('should display the contact link when the user is logged in', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: true, email: 'test@example.com' }} />);
    expect(wrapper.find('#contact-link').exists()).toBe(true);
  });
});
