import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import { setUserAction } from ".";
import { useEffect } from "react";
import { getUserInfoFromLocalStorage } from "../../utils/cache";
export const useUser = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const setUser = (payload) => {
    dispatch(setUserAction(payload));
  };
  useEffect(() => {
    const userInfo = getUserInfoFromLocalStorage();
    if (userInfo && !user) setUser({ user: userInfo, isAuthenticated: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    setUser,
    user,
    isAuthenticated,
  };
};
