import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  // custom hook to refresh JWT access token 
  // if expired or not saved in application memory
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/api/auth/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
      return {
        ...prev,
        roles: response.data.roles,
        accessToken: response.data.accessToken,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
