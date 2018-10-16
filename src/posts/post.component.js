import React from 'react';

export default class PostComponent extends React.Component {
    render () {
        return <div className="posts">
            <label htmlFor="new_post">Post:</label>
            <input type="text" name="new_post" value="" />
            <ul>
            </ul>
        </div>;
    }
}
