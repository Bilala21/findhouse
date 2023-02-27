import dynamic from "next/dynamic";
import Seo from "../../../../components/common/seo";
import CategoryForm from "../../../../components/dashboard/admin/categoryForm";

const index = () => {
  return (
    <>
      <Seo pageTitle="Dashboard" />
      <CategoryForm/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
