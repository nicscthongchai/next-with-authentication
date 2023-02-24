import { MainLayout } from "~layouts/MainLayout";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <MainLayout>
      <div className="text-center">Index Page</div>
    </MainLayout>
  );
};

export default IndexPage;
