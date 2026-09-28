import { Component } from "react"

const answers: string[] = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes — definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Signs point to yes",
    "Yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
]

type BallState = {
    answer: string
}

export default class MagicBall extends Component {
    state: BallState = {    
        answer: "your foresight"
    }

    handleAnswer = () => {
        const randomAnswer = answers[Math.floor(Math.random() * answers.length)]
        this.setState({answer: randomAnswer})
    }

    render() {
        return (
            <div className="magic-ball">
                <h1 className="ball-title">Magic 8 Ball</h1>
                <p className="ball-answer">{this.state.answer}</p>
                <button className="answer-button" onClick={this.handleAnswer}>Get answer</button>
            </div>
        )
    }
}