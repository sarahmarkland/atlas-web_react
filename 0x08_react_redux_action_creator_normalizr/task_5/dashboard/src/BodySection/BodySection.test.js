// BodySection.test.js
import React from 'react';
import { configure, shallow } from 'enzyme';
import BodySection from './BodySection';
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });

describe('BodySection component', () => {
  it('renders children and one h2 element with correct text', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    expect(wrapper.find('h2').text()).toEqual('test title');
    expect(wrapper.find('p').text()).toEqual('test children node');
  });
});
