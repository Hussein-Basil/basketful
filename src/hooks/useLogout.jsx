import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
  const { setAuth, setUser } = useAuth();

  const logout = async () => {
    setAuth({});
    setUser({});
    try {
      await axios.delete("/api/auth/logout", {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };
  return logout;
};

export default useLogout;
