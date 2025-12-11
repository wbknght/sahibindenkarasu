import { CategorySidebar } from "@/components/home/CategorySidebar";
import { Showcase } from "@/components/home/Showcase";

export default function Home() {
  return (
    <div className="w-[1150px] mx-auto my-3 px-4 py-4 flex flex-col md:flex-row items-start font-sans">
      <CategorySidebar />
      <Showcase />
    </div>
  );
}
