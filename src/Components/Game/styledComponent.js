import styled from 'styled-components'

export const GameContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start
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
  font-size: ${props => (props.count === 'true' ? '50px' : '')};
  margin-top: ${props => (props.count === 'true' ? '0px' : '')};
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
  width: 35vw;
  margin-top: 9px;
`

export const GameBtn = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`

export const Image = styled.img`
  height: ${props => (props.rules === 'true' ? '70vh' : '30vh')};
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
`
export const RulesContainer = styled.div`
  background-color: white;
  padding: 30px;
`

export const ResultContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Div = styled.div`
display : flex,
flex-direction : column;
justify-content: center;
align-items : center;
color : white;
`
