import { useCallback } from "react";
import { api } from "../config/api";
import { useLoading } from "../state/loading/hooks";
import { useUser } from "../state/user/hooks";
import { PATHS } from "../constants";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const useAuth = () => {
  const { setIsLoading } = useLoading();
  const { setUser } = useUser();
  const navigate = useNavigate();

  const loginUser = useCallback(
    async (credentials) => {
      try {
        setIsLoading(true);
        const { data } = await api.post("auth/signin", credentials);
        if (!data.success) throw new Error(data.message);
        setUser({ user: data.user, isAuthenticated: true });
        const redirectUrl = localStorage.getItem("path") ?? PATHS.HOME;
        navigate(redirectUrl);
        toast.success("Welcome to Newsletter App");
      } catch (e) {
        toast.error(e.response.data.message);
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading, setUser, navigate]
  );

  const logoutUser = useCallback(() => {
    setUser({ user: undefined, isAuthenticated: false });
    navigate(PATHS.HOME);
    toast.success("Logout Successfully");
  }, [setUser, navigate]);

  return {
    loginUser,
    logoutUser,
  };
};
