import styled from 'styled-components'
import Grid from './components/Layout/Grid'
import FullWidthSection from './components/Layout/FullWidthSection'
import MaxWidthSection from './components/Layout/MaxWidthSection'
import Row from './components/Layout/Row'

function App() {
  return (
    <Grid>
      <Header as = "header">
        <Nav as ="nav" sd={2} ed={12} sm={2} em={6} ss={2} se={2}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </Nav>
      </Header>
      <Content as = "main">
        <Row>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus atque officiis deserunt minus. 
          Expedita nam similique eligendi earum, tenetur nisi.</p>
        </Row>
      </Content>
    </Grid>
  );
}

export default App;



const Header = styled(FullWidthSection)`
  padding:1rem 1.5rem;
  background-color:lightcoral;

`

const Nav =styled(Row)`
  a{
    margin-right:1rem;
  }

`

const Content = styled(MaxWidthSection)`
  padding: 10rem 5rem;
  background-color:lightblue;

`