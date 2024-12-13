import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from 'react-icons/hi2';
import { NavList, StyledNavLink } from './MainNav.styles';

function MainNav() {
  return (
    <nav>
      <NavList>
        <StyledNavLink to="/dashboard">
          <HiOutlineHome />
          <span>Home</span>
        </StyledNavLink>
        <StyledNavLink to="/bookings">
          <HiOutlineCalendarDays />
          <span>Bookings</span>
        </StyledNavLink>
        <StyledNavLink to="/cabins">
          <HiOutlineHomeModern />
          <span>Cabins</span>
        </StyledNavLink>
        <StyledNavLink to="/users">
          <HiOutlineUsers />
          <span>Users</span>
        </StyledNavLink>
        <StyledNavLink to="/settings">
          <HiOutlineCog6Tooth />
          <span>Settings</span>
        </StyledNavLink>
      </NavList>
    </nav>
  );
}

export default MainNav;
