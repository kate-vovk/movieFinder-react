import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { TemporaryTestComponent } from '../src/TemporaryTestComponent';

Enzyme.configure({ adapter: new Adapter() });

// Temporary test, will be deleted in the next PR
describe('src', () => {
  it('TemporaryTestComponent changes the text after click', () => {
    // Render a checkbox with label in the document
    const checkbox = shallow(<TemporaryTestComponent labelOn="On" labelOff="Off" />);

    expect(checkbox.text()).toEqual('Off');

    checkbox.find('input').simulate('change');

    expect(checkbox.text()).toEqual('On');
  });
});
