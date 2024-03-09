import { createContext, useContext, useState, useEffect } from "react";
import config from "../config";

export const AuthContext = createContext(null);

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const auth = async () => {
    var auth = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    };

    fetch(config.api.authUrl, auth)
      .then((response) => response.json())
      .then((data) => setToken(data.access_token));
  };

  useEffect(() => {
    auth();
  }, []);

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
