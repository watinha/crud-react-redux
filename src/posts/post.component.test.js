import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import PostComponent from './post.component';

it('renders without crashing', () => {
    const div = document.createElement('div');
    let component = <PostComponent />,
        divs = null, ul = null, input = null, button = null;
    ReactDOM.render(component, div);
    divs = div.querySelectorAll('div.posts');
    expect(divs.length).toBe(1);
    input = div.querySelectorAll('div.posts input');
    expect(input .length).toBe(1);
    ul = div.querySelectorAll('div.posts ul');
    expect(ul.length).toBe(1);
    button = div.querySelectorAll('div.posts button');
    expect(button.length).toBe(1);
});

it('includes new posts', () => {
    const div = document.createElement('div');
    let component = <PostComponent />,
        button = null, input = null, li = null;
    ReactDOM.render(component, div);
    input = div.querySelector('input');
    button = div.querySelector('button');
    li = div.querySelectorAll('li');
    expect(li.length).toBe(0);
    input.value = 'Something to be done...';
    ReactTestUtils.Simulate.change(input);
    ReactTestUtils.Simulate.click(button);
    li = div.querySelectorAll('li');
    expect(li.length).toBe(1);
    expect(li[0].textContent).toBe('Something to be done...');
    expect(input.value).toBe('');
});

it('includes more posts', () => {
    const div = document.createElement('div');
    let component = <PostComponent />,
        button = null, input = null, li = null;
    ReactDOM.render(component, div);
    input = div.querySelector('input');
    button = div.querySelector('button');
    li = div.querySelectorAll('li');
    expect(li.length).toBe(0);
    input.value = 'Pep';
    ReactTestUtils.Simulate.change(input);
    ReactTestUtils.Simulate.click(button);
    input.value = 'Mam';
    ReactTestUtils.Simulate.change(input);
    ReactTestUtils.Simulate.click(button);
    li = div.querySelectorAll('li');
    expect(li.length).toBe(2);
    expect(li[0].textContent).toBe('Pep');
    expect(li[1].textContent).toBe('Mam');
    expect(input.value).toBe('');
});

it('should not include empty posts', () => {
    const div = document.createElement('div');
    let component = <PostComponent />,
        button = null, input = null, li = null;
    ReactDOM.render(component, div);
    input = div.querySelector('input');
    button = div.querySelector('button');
    li = div.querySelectorAll('li');
    expect(li.length).toBe(0);
    input.value = '';
    ReactTestUtils.Simulate.change(input);
    ReactTestUtils.Simulate.click(button);
    li = div.querySelectorAll('li');
    expect(li.length).toBe(0);
});
