import { Logo, MainNav } from '..';
import { StyledSidebar } from './Sidebar.styles';

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
