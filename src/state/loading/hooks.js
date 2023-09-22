import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import { setIsLoadingAction } from ".";

export const useLoading = () => {
  const { isLoading } = useSelector((state) => state.loading);
  const dispatch = useAppDispatch();

  const setIsLoading = (payload) => {
    dispatch(setIsLoadingAction(payload));
  };

  return {
    setIsLoading,
    isLoading,
  };
};
