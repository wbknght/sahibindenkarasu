
import { SearchSidebar } from "@/components/search/SearchSidebar";
import { ListingTable } from "@/components/search/ListingTable";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function SearchPage() {
    return (
        <div className="container mx-auto px-4 py-4 font-sans">
            {/* Breadcrumb & Title */}
            <div className="mb-4">
                <Breadcrumb className="mb-2">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Anasayfa</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Emlak</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Konut</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                    <h1 className="text-sm font-bold text-gray-800">
                        Konut <span className="text-gray-500 font-normal">(150.234 ilan)</span>
                    </h1>
                    <div className="flex items-center space-x-2 text-xs">
                        <span>Sıralama:</span>
                        <select className="border border-gray-300 rounded px-2 h-7 bg-white text-gray-700">
                            <option>Fiyata Göre (Önce En Yüksek)</option>
                            <option>Fiyata Göre (Önce En Düşük)</option>
                            <option>Tarihe Göre (Önce En Yeni)</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Layout: Sidebar + Results */}
            <div className="flex flex-col md:flex-row items-start">
                <SearchSidebar />

                <div className="flex-1 w-full">
                    <div className="mb-2 bg-blue-50 border border-blue-200 p-2 text-xs text-blue-800 rounded-sm">
                        Aradığınız kriterlere uygun <strong>150.234</strong> ilan bulundu.
                    </div>

                    <ListingTable />

                    <div className="mt-6 flex justify-center">
                        {/* Pagination placeholder */}
                        <div className="flex space-x-1 text-xs font-bold">
                            <button className="w-8 h-8 flex items-center justify-center border hover:bg-gray-100">1</button>
                            <button className="w-8 h-8 flex items-center justify-center border hover:bg-gray-100 bg-blue-600 text-white">2</button>
                            <button className="w-8 h-8 flex items-center justify-center border hover:bg-gray-100">3</button>
                            <span className="flex items-center justify-center px-2">...</span>
                            <button className="w-8 h-8 flex items-center justify-center border hover:bg-gray-100">50</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
