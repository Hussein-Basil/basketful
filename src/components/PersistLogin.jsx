import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";
import LoadingPage from '../pages/LoadingPage';

const PersistLogin = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, rememberMe } = useAuth();

  useEffect(() => {
    let isMounted = true;
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };
    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

    return () => (isMounted = false);
  }, []);

  // if remember this device is not enabled, don't wait and load child routes
  // otherwise wait until access token is refreshed
  return (
    <>{!rememberMe ? children : isLoading ? <LoadingPage /> : children}</>
  );
};

export default PersistLogin;
