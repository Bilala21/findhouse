import dynamic from "next/dynamic";
import Seo from "../../../../components/common/seo";
import CategoryForm from "../../../../components/dashboard/admin/categoryForm";

const Index = () => {
  return (
    <>
      <Seo pageTitle="Dashboard" />
      <CategoryForm/>
    </>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
