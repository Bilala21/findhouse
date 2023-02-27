import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import Admin from "../../components/dashboard/admin";

const index = () => {
  return (
    <>
      <Seo pageTitle="Dashboard" />
      <Admin />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
