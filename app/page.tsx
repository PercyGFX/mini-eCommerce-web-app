import Image from "next/image";
import Header from "./components/Header";
import AllProducts from "./components/AllProducts";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] max-w-[1440px] mx-auto border py-4 px-16">
      <Header />
      <AllProducts />
    </div>
  );
}
