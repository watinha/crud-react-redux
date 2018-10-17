import React from 'react';
import { connect } from 'react-redux';

class PostComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = { new_post: '' };
    }

    change (ev) { this.setState({ new_post: ev.target.value }); }

    add () {
        if (this.state.new_post.length === 0) return ;
        this.props.dispatch({
            type: 'NEW_POST',
            post: this.state.new_post
        });
        this.setState({
            new_post: ''
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
            {this.props.posts.map((post, index) => {
                return <li key={index}>{post}</li>
            })}
            </ul>
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
};

export default connect(mapStateToProps)(PostComponent);
