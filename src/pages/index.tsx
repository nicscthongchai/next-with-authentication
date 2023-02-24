import { MainLayout } from "~layouts/MainLayout";
import { GetServerSideProps, NextPage } from "next";
import { User } from "./api/user/me";
import { parseCookies } from "nookies";
import { ACCESS_TOKEN_NAME } from "~constant/cookie";

const IndexPage: NextPage = () => {
  return (
    <MainLayout>
      <div className="text-center">Index Page</div>
    </MainLayout>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let user: User | null = null;
  const accessToken = parseCookies(ctx)[ACCESS_TOKEN_NAME];

  if (accessToken) {
    try {
      const response = await fetch("http://localhost:3000/api/user/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.status === 200) {
        user = await response.json();
      }
    } catch (error) {
      console.error(error);
    }
  }

  return {
    props: {
      user,
    },
  };
};
