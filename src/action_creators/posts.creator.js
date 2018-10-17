export default class PostCreator {
    static add (post) {
        return {
            type: 'NEW_POST',
            post: post
        };
    }
}
