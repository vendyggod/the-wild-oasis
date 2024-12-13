import { Outlet } from 'react-router';
import { Header, Sidebar } from '..';
import {
  Main,
  StyledAppLayout,
  Container,
} from '../AppLayout/AppLayout.styles';

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
