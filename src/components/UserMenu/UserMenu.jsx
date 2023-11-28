import { useDispatch } from 'react-redux';
import { BsPersonFillLock } from 'react-icons/bs';
import { logOut } from 'redux/auth/authOperatioms';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { isName } = useAuth();

  return (
    <div className={css.container}>
      <span>
        <BsPersonFillLock size="22" color="rgb(228, 150, 163)" />
      </span>
      <p className={css.userName}> WELCOME , {isName} !</p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        LOGOUT
      </button>
    </div>
  );
};
