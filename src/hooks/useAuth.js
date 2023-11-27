import { useSelector } from 'react-redux';
import {
  getIsLoggedIn,
  getuserName,
  getUsersCurrent,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isCurrent = useSelector(getUsersCurrent);
  const isName = useSelector(getuserName);

  return {
    isLoggedIn,
    isCurrent,
    isName,
  };
};
