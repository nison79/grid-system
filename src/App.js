import styled from 'styled-components'
import Grid from './components/Layout/Grid'
import FullWidthSection from './components/Layout/FullWidthSection'
import MaxWidthSection from './components/Layout/MaxWidthSection'
import Row from './components/Layout/Row'
import img from './assets/images/_GEO0029-10.jpg'

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
        <Grid>
            
            <img src={img} alt="toy"/>
            <img src={img} alt="toy"/>
            <img src={img} alt="toy"/>
        </Grid>
        
      </Content>

      
      


    </Grid>
  );
}

export default App;



const Header = styled(FullWidthSection)`
  padding:1rem 1.5rem;
  background-color:lightcoral;

`

const Nav =styled.p`
  a{
    margin-right:1rem;
  }

`

const Content = styled(MaxWidthSection)`
  padding:20rem 2rem;
  background-color:lightblue;
  img{
    width:21rem;
    @media (max-width:1200px) {
      width:18rem;
    }
  
  }


`

const Paragraph = styled(Row)`
padding-top:1rem;

`