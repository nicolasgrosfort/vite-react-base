import styled from 'styled-components'

const HomeContainer = styled.div`
    background-color: black;
`

const HomeTitle = styled.h1`
    color: white
`

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>Hello world</HomeTitle>
    </HomeContainer>
  )
}

export default Home
