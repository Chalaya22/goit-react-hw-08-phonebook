import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { BsHouseLockFill } from 'react-icons/bs';

const styles = {
  link: {
    display: 'inline-block',
    alineItems: 'center',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 400,
    color: '#2a363b',
  },
};
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <span>
        <BsHouseLockFill size="20" color="rgb(11, 88, 114)" />
      </span>
      <NavLink style={styles.link} to="/">
        HOME
      </NavLink>

      {isLoggedIn && (
        <NavLink style={styles.link} to="/contacts">
          CONTACTS
        </NavLink>
      )}
    </nav>
  );
};
