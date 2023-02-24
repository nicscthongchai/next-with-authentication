import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN_NAME } from "~constant/cookie";
import { User } from "~pages/api/user/me";

export const useMe = () => {
  const [user, setUser] = useState<User | null>(null);

  const revalidate = async () => {
    try {
      const accessToken = parseCookies()[ACCESS_TOKEN_NAME];
      if (!accessToken) {
        setUser(null);
        return;
      }
      const response = await fetch("/api/user/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error(error);
      setUser(null);
    }
  };

  useEffect(() => {
    revalidate();
  }, []);

  return {
    user,
    revalidate,
  };
};
