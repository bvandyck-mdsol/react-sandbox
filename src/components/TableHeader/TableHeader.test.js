import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TableHeader from './TableHeader';

configure({adapter: new Adapter()});

describe('<TableHeader />', () => {
    
    const wrapper = shallow(<TableHeader headers={["column1", "column2"]}  />);

    it('should render header', () => {
        wrapper.setProps({headers: ["column1"]});
        expect(wrapper.find('thead')).toHaveLength(1);
    });
});