import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>홈</div>
      <div>
        <Link to={'/community/post/new'}>글쓰기</Link>
      </div>
    </div>
  );
};

export default Home;
