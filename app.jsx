var PLAYERS = [
    {
        name:'Rimil Dey',
        score: 18,
        id:1
    },
    {
        name: 'Prateek',
        score:26,
        id:2
    },
    {
        name: 'Manu',
        score: 6,
        id:3
    },
    {
        name: 'Shanu',
        score: 4,
        id:4
    }
]


function Header(props){
    return (
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    );
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired,
};

function Player(props){
    return (
        <div className="player">
            <div className="player-name">
                {props.name}
            </div>
            <div className="player-score">
                <Counter score={props.score} />
            </div>
        </div>

    );

}

Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired
}



function Counter(props) {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <div className="counter-score"> {props.score} </div>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

Counter.proptypes = {
    score: React.PropTypes.number.isRequired
}

var Application = React.createClass({

    propTypes : {
        title: React.PropTypes.string,
        players: React.PropTypes.arrayOf(React.PropTypes.shape(
            {
                name: React.PropTypes.string.isRequired,
                score: React.PropTypes.number.isRequired,
                id: React.PropTypes.number.isRequired
            }
        )).isRequired
    },

    getDefaultProps : function() {
        return {
            title: "Scoreboard"
        };
    },

   /* getIntitialState: function(){
        return {
            players: this.props.initialPlayers,
        };
    },*/

    render: function(){
        return (
            <div className="scoreboard">
                <Header title={this.props.title} />
                <div className="players">
                    {this.props.players.map(function(player){
                        return <Player name={player.name} score={player.score} key={player.id}/>
                    })}
                </div>
            </div>
        );
    }
});

ReactDOM.render(<Application players={PLAYERS} />,document.getElementById('container'));