import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../App';
import { SamplePage } from '../pages';

describe('src/__test__/components.test', () => {
  describe('<App />', () => {
    it('should render', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(SamplePage)).to.have.length(1);
    });
  });
});
