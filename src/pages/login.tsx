import { CookieSerializeOptions } from "cookie";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { Button } from "~components/Button";
import { ACCESS_TOKEN_NAME } from "~constant/cookie";
import { MainLayout } from "~layouts/MainLayout";
import { LoginResponse } from "./api/login";

const LoginPage: NextPage = () => {
  const router = useRouter();

  const handleClickLogin = async () => {
    try {
      const response = await fetch("/api/login", { method: "POST" });
      const data: LoginResponse = await response.json();
      const { accessToken } = data;
      setCookie(null, ACCESS_TOKEN_NAME, accessToken, {
        maxAge: 24 * 60 * 60,
      } as CookieSerializeOptions);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainLayout>
      <div className="flex justify-center">
        <Button onClick={handleClickLogin}>Click to Login</Button>
      </div>
    </MainLayout>
  );
};

export default LoginPage;
