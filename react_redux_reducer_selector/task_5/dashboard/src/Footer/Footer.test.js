import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from '../App/AppContext';

describe('Footer Component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

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

  it('should not display the contact link when the user is logged out',() => {
    const contextValue = {
      user: {
        isLoggedIn: false,
      },
    };

    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find('#contact-link').exists()).toBe(false);
  });

  it('should display the contact link when the user is logged in', () => {
    const contextValue = {
      user: {
        isLoggedIn: true,
        email: 'test@example.com',
      },
    };
    
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find('#contact-link').exists()).toBe(true);
  });
});