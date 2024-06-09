import {Component} from 'react'

import Popup from 'reactjs-popup'

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

class Game extends Component {
  state = {
    isClicked: false,
    myChoice: choicesList[0].id,
    opponentChoice: choicesList[1].id,
    score: 0,
    resultText: 'Game Start',
  }

  setScore = () => {
    this.setScore({score: 1})
  }

  changeIsClicked = id => {
    const random = Math.ceil(Math.random() * 2)

    const randomChoice = choicesList[random].id

    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
      myChoice: id,
      opponentChoice: randomChoice,
    }))
    this.setScore()
  }

  renderRockPaperScissors = () => (
    <Content>
      <ImageContainer>
        <GameBtn
          type="button"
          data-testid="rockButton"
          onClick={() => this.changeIsClicked(choicesList[0].id)}
        >
          <Image src={choicesList[0].imageUrl} alt="game" />
        </GameBtn>
        <GameBtn
          type="button"
          data-testid="scissorsButton"
          onClick={() => this.changeIsClicked(choicesList[1].id)}
        >
          <Image src={choicesList[1].imageUrl} alt="game" />
        </GameBtn>
        <GameBtn
          type="button"
          data-testid="paperButton"
          onClick={() => this.changeIsClicked(choicesList[2].id)}
        >
          <Image src={choicesList[2].imageUrl} alt="game" />
        </GameBtn>
      </ImageContainer>
    </Content>
  )

  renderGameResults = () => {
    const {myChoice, opponentChoice, resultText} = this.state

    const mc = choicesList.filter(each => each.id === myChoice)
    const oc = choicesList.filter(each => each.id === opponentChoice)

    return (
      <Content>
        <ImageContainer>
          <Div>
            <H1>Your Choice</H1>
            <Image src={mc[0].imageUrl} alt="your choice" />
          </Div>
          <Div>
            <H1>Opponent Choice</H1>
            <Image src={oc[0].imageUrl} alt="your choice" />
          </Div>
        </ImageContainer>
        <H1 result="true">{resultText}</H1>
        <RulesBtn type="button" onClick={this.changeIsClicked}>
          Play Again
        </RulesBtn>
      </Content>
    )
  }

  render() {
    const {isClicked, score} = this.state

    return (
      <GameContainer>
        <ScoreContainer>
          <NameContainer>
            <H1>Rock</H1>
            <H1>PAPER</H1>
            <H1>SCISSORS</H1>
          </NameContainer>
          <ScoreBox>
            <H1>Score</H1>
            <H1 count="true">{score}</H1>
          </ScoreBox>
        </ScoreContainer>
        {isClicked ? this.renderGameResults() : this.renderRockPaperScissors()}
        <Popup modal trigger={<RulesBtn type="button">Rules</RulesBtn>}>
          <RulesContainer>
            <Image
              rules="true"
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </RulesContainer>
        </Popup>
      </GameContainer>
    )
  }
}

export default Game
