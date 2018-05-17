import TweetBox from "./components/Tweetbox"
import TweetList from "./components/TweetList"

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tweetList: []};
    }

    formattedTweets(tweetList) {
        let formattedList = tweetList.map(tweet => {
            tweet.formattedDate = moment(tweet.created_at).fromNow();
            return tweet;
        });
        return {
            tweetList: formattedList
        };
    }

    addTweet(tweetToAdd) {
        $.post('/tweets', { body: tweetToAdd })
            .success( savedTweet => {
                let newTweetList = this.state.tweetList;
                newTweetList.unshift(savedTweet);
                this.setState(this.formattedTweets(newTweetList));
            })
            .error(error => console.log((error)));
    }

    componentDidMount(){
        $.ajax("/tweets")
            .success(data => this.setState(this.formattedTweets(data)))
            .error(error => console.log(error));
    }

    render() {
        return (
           <div className="container">
               <TweetBox sendTweet={this.addTweet.bind(this)}/>
               <TweetList tweets={this.state.tweetList} />
           </div>
        )
    }
}

let documentReady = () => {
    let reactNode = document.getElementById('react');
    if (reactNode) {
        ReactDOM.render(
            <Main />,
            reactNode
        );
    }
};

$(documentReady());