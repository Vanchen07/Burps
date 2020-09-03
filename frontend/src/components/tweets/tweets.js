import React from 'react';
import { withRouter } from 'react-router-dom';
import TweetBox from './tweet_box';

class Tweet extends React.Component {
    // constructor(props) {
    //     super(props);

    //     // this.state = {
    //     //     tweets: []
    //     // }
    // }

    componentDidMount() {
        this.props.fetchTweets();
    }

    // UNSAFE_componentWillReceiveProps(newState) {
    //     this.setState({ tweets: newState.tweets });
    // }

    render() {
        if (!this.props.tweets.length === 0) {
            return (<div>There are no Burps</div>)
        } else {
            return (
                <div className="all-tweets">
                    <h2>All Burps</h2>
                    {this.props.tweets.map(tweet => (
                        <TweetBox key={tweet._id} text={tweet.text} author={tweet.user.handle} />
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(Tweet);