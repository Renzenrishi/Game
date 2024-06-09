import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {
  GameContainer,
  ScoreContainer,
  NameContainer,
  H1,
  ScoreBox,
  Content,
  ImageContainer,
  GameBtn,
  Image,
  RulesBtn,
  RulesContainer,
  Div,
  CloseBtn,
  Score,
  PlayAgain,
  P,
} from './styledComponent'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const status = {
  won: 'YOU WON',
  lose: 'YOU LOSE',
  tie: 'IT IS DRAW',
}

class Game extends Component {
  state = {
    isClicked: false,
    myChoice: '',
    opponentChoice: '',
    score: 0,
    resultText: 'Game Start',
  }

  setScore = () => {
    const {opponentChoice, myChoice} = this.state

    console.log(myChoice)
    console.log(opponentChoice)

    if (myChoice === 'PAPER' && opponentChoice === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        resultText: status.won,
      }))
    } else if (myChoice === 'SCISSORS' && opponentChoice === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        resultText: status.won,
      }))
    } else if (myChoice === 'ROCK' && opponentChoice === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        resultText: status.won,
      }))
    } else if (myChoice === 'ROCK' && opponentChoice === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        resultText: status.lose,
      }))
    } else if (myChoice === 'SCISSORS' && opponentChoice === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        resultText: status.lose,
      }))
    } else if (myChoice === 'PAPER' && opponentChoice === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        resultText: status.lose,
      }))
    } else if (myChoice === opponentChoice) {
      this.setState({resultText: status.tie})
    }
  }

  changeIsClicked = id => {
    const random = Math.floor(Math.random() * 3)

    const randomChoice = choicesList[random].id

    this.setState(
      {
        isClicked: true,
        myChoice: id,
        opponentChoice: randomChoice,
      },
      this.setScore,
    )
  }

  renderRockPaperScissors = () => (
    <Content>
      <ImageContainer>
        <GameBtn
          type="button"
          data-testid="rockButton"
          onClick={() => this.changeIsClicked(choicesList[0].id)}
        >
          <Image src={choicesList[0].imageUrl} alt={choicesList[0].id} />
        </GameBtn>
        <GameBtn
          type="button"
          data-testid="scissorsButton"
          onClick={() => this.changeIsClicked(choicesList[1].id)}
        >
          <Image src={choicesList[1].imageUrl} alt={choicesList[1].id} />
        </GameBtn>
        <GameBtn
          type="button"
          data-testid="paperButton"
          onClick={() => this.changeIsClicked(choicesList[2].id)}
        >
          <Image src={choicesList[2].imageUrl} alt={choicesList[2].id} />
        </GameBtn>
      </ImageContainer>
    </Content>
  )

  renderGameResultView = () => {
    const {myChoice, opponentChoice, resultText} = this.state

    const mc = choicesList.filter(each => each.id === myChoice)
    const oc = choicesList.filter(each => each.id === opponentChoice)

    return (
      <Content>
        <ImageContainer>
          <Div>
            <H1>YOU</H1>
            <Image src={mc[0].imageUrl} alt="your choice" />
          </Div>
          <Div>
            <H1>OPPONENT</H1>
            <Image src={oc[0].imageUrl} alt="opponent choice" />
          </Div>
        </ImageContainer>
        <P result="true">{resultText}</P>
        <PlayAgain
          type="button"
          onClick={() => this.setState({isClicked: false})}
        >
          PLAY AGAIN
        </PlayAgain>
      </Content>
    )
  }

  render() {
    const {isClicked, score} = this.state

    return (
      <GameContainer>
        <ScoreContainer>
          <NameContainer>
            <H1>Rock Paper Scissors</H1>
          </NameContainer>
          <ScoreBox>
            <P>Score</P>
            <Score>{score}</Score>
          </ScoreBox>
        </ScoreContainer>
        {isClicked
          ? this.renderGameResultView()
          : this.renderRockPaperScissors()}
        <Popup modal trigger={<RulesBtn type="button">Rules</RulesBtn>}>
          {close => (
            <RulesContainer>
              {/* eslint-disable-next-line */}
              <CloseBtn type="button" onClick={() => close()}>
                <RiCloseLine />
              </CloseBtn>
              <Image
                rules="true"
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </RulesContainer>
          )}
        </Popup>
      </GameContainer>
    )
  }
}

export default Game
