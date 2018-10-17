import post_reducer from './post_reducer';

it('should return initial state if no action', () => {
    let result = post_reducer();
    expect(result).toEqual({ posts: [] });
});

it('should add post in a new state instance', () => {
    let initial = { posts: [] },
        result = post_reducer(initial, { type: 'NEW_POST', post: 'abobrinha' });
    expect(result).toEqual({ posts: ['abobrinha'] });
});

it('should add two posts in a new state instance', () => {
    let initial = { posts: [] },
        result = post_reducer(initial, { type: 'NEW_POST', post: 'abacate' });
    expect(result).toEqual({ posts: ['abacate'] });
    result = post_reducer(result, { type: 'NEW_POST', post: 'pepino' });
    expect(result).toEqual({ posts: ['abacate', 'pepino'] });
});
