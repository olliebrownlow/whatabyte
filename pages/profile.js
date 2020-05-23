import Layout from "../components/Layout";
import { useFetchUser } from "../utils/user";
import Router from "next/router";

const ProfileView = (props) => {
  const { user, loading } = useFetchUser();

  if (loading) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }

  if (!user && !loading) {
    Router.replace("/");
  }

  return <Layout>{`Profile View`}</Layout>;
};

export default ProfileView;
