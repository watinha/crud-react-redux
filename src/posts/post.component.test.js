import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import PostComponent from './post.component';

it('renders without crashing', () => {
    const div = document.createElement('div');
    let component = <PostComponent />,
        divs = null, ul = null, input = null;
    ReactDOM.render(component, div);
    divs = div.querySelectorAll('div.posts');
    expect(divs.length).toBe(1);
    input = div.querySelectorAll('div.posts input');
    expect(input .length).toBe(1);
    ul = div.querySelectorAll('div.posts ul');
    expect(ul.length).toBe(1);
});
