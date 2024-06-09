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
  }

  renderRockPaperScissors = () => (
    <Content>
      <ImageContainer>
        <GameBtn type="button" data-testid="rockButton">
          <Image src={choicesList[0].imageUrl} alt="game" />
        </GameBtn>
        <GameBtn type="button" data-testid="scissorsButton">
          <Image src={choicesList[1].imageUrl} alt="game" />
        </GameBtn>
        <GameBtn type="button" data-testid="paperButton">
          <Image src={choicesList[2].imageUrl} alt="game" />
        </GameBtn>
      </ImageContainer>
    </Content>
  )

  render() {
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
            <H1 count="true">0</H1>
          </ScoreBox>
        </ScoreContainer>
        {this.renderRockPaperScissors()}
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
