import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import { setUserAction } from ".";

export const useUser = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const setUser = (payload) => {
    dispatch(setUserAction(payload));
  };

  return {
    setUser,
    user,
    isAuthenticated,
  };
};
