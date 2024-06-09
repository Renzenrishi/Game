import styled from 'styled-components'

export const GameContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  padding: 10px;
`
export const ScoreContainer = styled.div`
  border-width: 1px;
  border-color: #ffffff;
  border-radius: 10px;
  border-style: solid;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 25vh;
`
export const NameContainer = styled.div`
  color: #ffffff;
  font-family: 'Bree serif';
  margin-left: 20px;
`
export const H1 = styled.h1`
  margin-top: ${props => (props.count === 'true' ? '0px' : '')};
`

export const P = styled.p`
  font-size: 25px;
  color: ${props => (props.result === 'true' ? 'white' : '')};
`

export const ScoreBox = styled.div`
  background-color: #ffffff;
  color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 20vh;
  width: 15vw;
  margin-right: 20px;
`

export const Score = styled.p`
  font-family: 'Roboto';
  font-size: 50px;
  margin-top: 0px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 45vw;
  margin-top: 15px;
`

export const GameBtn = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`

export const Image = styled.img`
  height: ${props => (props.rules === 'true' ? '75vh' : '30vh')};
  width: ${props => (props.rules === 'true' ? '' : '15vw')};
`

export const RulesBtn = styled.button`
  background-color: white;
  font-family: 'Bree serif';
  border-width: 0px;
  border-radius: 10px;
  width: 100px;
  height: 35px;
  cursor: pointer;
  margin-left: auto;
`
export const RulesContainer = styled.div`
  background-color: white;
  padding: 30px;
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`

export const CloseBtn = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`
export const PlayAgain = styled.button`
  background-color: white;
  font-family: 'Bree serif';
  border-width: 0px;
  border-radius: 10px;
  width: 140px;
  height: 40px;
  cursor: pointer;
`
