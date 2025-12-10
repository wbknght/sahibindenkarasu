import { CategorySidebar } from "@/components/home/CategorySidebar";
import { Showcase } from "@/components/home/Showcase";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-start font-sans">
      <CategorySidebar />
      <Showcase />
    </div>
  );
}
