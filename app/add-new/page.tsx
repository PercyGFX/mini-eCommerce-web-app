import Image from "next/image";
import Header from "../components/Header";
import AddNewProduct from "../components/AddNew";

export default function SearchPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-satoshi)] max-w-[1440px] mx-auto border py-4 px-16">
      <Header />
      <AddNewProduct />
    </div>
  );
}