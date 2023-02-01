import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Wrapper>
        <h1>
          <Link to="/">Nepp Movie</Link>
        </h1>
        <NavBar>
          <GnbList>
            <li>
              <Link to="movie">영화</Link>
            </li>
            <li>
              <Link to="tv">Tv프로그램</Link>
            </li>
            <li>
              <Link to="person">인물</Link>
            </li>
          </GnbList>
        </NavBar>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: #ddd;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 900;
  height: 60px;

  margin: 0 auto;
  background-color: #eee;
`;

const NavBar = styled.nav`
  margin-left: 30px;
`;

const GnbList = styled.ul`
  display: flex;
  li + li {
    margin-left: 20px;
  }
`;

export default Header;
