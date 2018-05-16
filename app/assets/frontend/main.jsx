import TweetBox from "./components/Tweetbox"
import TweetList from "./components/TweetList"

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tweetList: []};
    }

    addTweet(tweetToAdd) {
        let newTweetList = this.state.tweetList;
        newTweetList.unshift({ id: Date.now(), name: 'Guest', body: tweetToAdd });

        this.setState({ tweetList: newTweetList});
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