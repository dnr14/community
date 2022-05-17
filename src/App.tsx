import { Switch, Route, Link } from 'react-router-dom';
import List from 'pages/List';
import styled from 'styled-components';
import Write from 'pages/Write';

function App() {
  return (
    <Container>
      <Switch>
        <Route path={'/'} exact>
          <Link to={'/community/list'}>
            <button>LIST</button>
          </Link>
          <Link to={'/community/post/new'}>
            <button>NEW</button>
          </Link>
        </Route>
        <Route path="/community/list" exact component={List} />
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
