import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import Notifications from './Notifications/Notifications';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  }
  );
  it('should render without crashing', () => {
    // const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

// describe('App Component', () => {
  it('should contain the Notifications component', () => {
    // const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('should contain the Header component', () => {
    // const wrapper = shallow(<App />);
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('should contain the Login component', () => {
    // const wrapper = shallow(<App />);
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  it('should contain the Footer component', () => {
    // const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).exists()).toBe(true);
  });
});

//   it('should render a div with the class App-header', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('.App-header').exists()).toBe(true);
//   });

//   it('should render a div with the class App-body', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('.App-body').exists()).toBe(true);
//   });

//   it('should render a div with the class App-footer', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('.App-footer').exists()).toBe(true);
//   });
// });