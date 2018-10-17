export default (state = {posts: []}, action) => {
    if (!action || !action.type)
        return state;
    switch (action.type) {
        case 'NEW_POST':
            return Object.assign({}, state, {
                posts: state.posts.concat([action.post])
            });
    }
    return state;
};
