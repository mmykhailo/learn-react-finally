import React, {Component} from 'react';

//Components



class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            elapsed: 0,
            lastTick: 0,
        };
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.tick = this.tick.bind(this);
    }

    tick(){
        if(this.state.running){
            let now = Date.now();
            let diff = now - this.state.lastTick;
            this.setState({
                elapsed: this.state.elapsed + diff,
                lastTick: now
            });
        }
    }

    format(ms) {
        let totalSeconds = Math.floor(ms / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        return [`${hours < 9 ? '0' + hours : hours}`,`${minutes < 9 ? '0' + minutes : minutes}`,`${seconds < 9 ? '0' + seconds : seconds}`];
    }

    componentDidMount(){
        this.interval = setInterval(this.tick, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    handleStart(){
        this.setState({
            running: true,
            lastTick: Date.now()
        })
    }

    handleStop(){
        this.setState({
            running: false,
            elapsed: 0,
            lastTick: 0
        })
    }

    handlePause(){
        this.setState({
            running: false
        })
    }

    render() {
        let time = this.format(this.state.elapsed);
        return (
            <section className='timer'>
                <span>
                    {time[0]}
                </span>
                :
                <span>
                    {time[1]}
                </span>
                :
                <span>
                    {time[2]}
                </span>
                <div className= 'timer__btns'>
                    {
                        this.state.running ?
                            <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Pause" onClick={this.handlePause}>pause</button>
                            :
                            <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Pause" onClick={this.handleStart}>play_arrow</button>
                    }

                    <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Pause" onClick={this.handleStop}>stop</button>
                </div>
            </section>
        );
    }
}





export default Timer;


