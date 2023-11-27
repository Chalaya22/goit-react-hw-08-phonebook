import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { BsHouseLockFill } from 'react-icons/bs';

// import { useSelector } from 'react-redux';
// import { getIsLoggedIn } from 'redux/auth/authSelectors';

const styles = {
  link: {
    display: 'inline-block',
    alineItems: 'center',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2a363b',
  },
};
export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  // const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <span>
        <BsHouseLockFill size="20" color="rgb(11, 88, 114)" />
      </span>
      <NavLink style={styles.link} to="/">
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink style={styles.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
