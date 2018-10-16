import React from 'react';

export default class PostComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = { new_post: '', posts: [] };
    }

    change (ev) {
        this.setState({
            new_post: ev.target.value
        });
    }

    add () {
        if (this.state.new_post.length === 0) return ;
        this.setState((prevState) => {
            return {
                new_post: '',
                posts: prevState.posts.concat([this.state.new_post])
            };
        });
    }

    render () {
        return <div className="posts">
            <label htmlFor="new_post">Post:</label>
            <input type="text" name="new_post"
                   value={this.state.new_post}
                   onChange={this.change.bind(this)} />
            <button onClick={this.add.bind(this)}>add...</button>
            <ul>
            {this.state.posts.map((post, index) => {
                return <li key={index}>{post}</li>
            })}
            </ul>
        </div>;
    }
}
