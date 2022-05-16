import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import styled from 'styled-components';
import Write from 'pages/Write';

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/community/list" exact component={Home} />
        <Route path="/community/post/new" component={Write} />
      </Switch>
    </Container>
  );
}

const Container = styled.main`
  max-width: 360px;
  left: 0;
  right: 0;
  margin: 0 auto;
  position: absolute;
  height: 821px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export default App;
