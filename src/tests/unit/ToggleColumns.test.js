
import React from 'react';
import ToggleColumns from '../../components/ToggleColumns';
import '../../setupTests.js';
import { shallow, mount, render } from 'enzyme';

describe('ToggleColumns.js component', () => {
  
  let columns = {
    id: true,
    name: true,
    department: true,
    currency: true,
    price: true
  }
  
  it('is click checkbox handler binded to column', () => {
    const onCheckboxClick = jest.fn(),
      props = {
        columns: columns,
        onCheckboxClick
      }

    for(let column in columns) {
      let InputCheckboxComponent = mount(<ToggleColumns {...props} />).find(`input[name="${column}"]`);
      InputCheckboxComponent.simulate('change', { target: {name: column, checked: false }});
      expect(onCheckboxClick).toHaveBeenCalledWith(column, false);  
    }
  });
  it('are appropriate checkboxes checked according to columns object', () => {
    const onCheckboxClick = jest.fn(),
      props = {
        columns: columns,
        onCheckboxClick
      }
    for(let column in columns) {
      let InputCheckboxComponent = mount(<ToggleColumns {...props} />).find(`input[name="${column}"]`);
      expect(InputCheckboxComponent.props().checked).toBeTruthy();

    }
  });
  

});
