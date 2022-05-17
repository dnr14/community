import { Switch, Route, Link } from 'react-router-dom';
import List from 'pages/List';
import styled from 'styled-components';
import Write from 'pages/Write';
import Detail from 'pages/Detail';
import HomeEmpty from 'components/common/HomeEmpty';
import Button from 'components/common/Button';

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/" exact>
          <Link to="/community/list">
            <Button width="150px" height="50px" left="calc(50% - 75px)" top="150px">
              홈으로
            </Button>
          </Link>
        </Route>
        <Route path="/community/list" exact component={List} />
        <Route path="/community/post/new" component={Write} />
        <Route path="/community/post/:post_pk" component={Detail} />
        <Route path="*" render={() => <HomeEmpty text="없는 경로입니다.😰" />} />
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
