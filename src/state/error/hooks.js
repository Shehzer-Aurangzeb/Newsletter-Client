import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import { setErrorAction } from ".";

export const useError = () => {
  const { error } = useSelector((state) => state.error);
  const dispatch = useAppDispatch();

  const setError = (payload) => {
    dispatch(setErrorAction(payload));
  };

  return {
    setError,
    error,
  };
};
