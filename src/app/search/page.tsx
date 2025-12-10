import { SearchSidebar } from "@/components/search/SearchSidebar";
import { ListingTable } from "@/components/search/ListingTable";

export default function SearchPage() {
    return (
        <div className="container mx-auto px-0 py-2 font-sans bg-white">
            {/* Breadcrumb & Title */}
            <div className="mb-2 px-4">
                <div className="text-[11px] text-[#333] mb-2 font-normal flex items-center space-x-1">
                    <a href="/" className="hover:underline">Anasayfa</a>
                    <span className="text-[#999]">&gt;</span>
                    <a href="#" className="hover:underline">Emlak</a>
                    <span className="text-[#999]">&gt;</span>
                    <span className="font-bold">Konut</span>
                </div>

                <div className="flex justify-between items-center bg-gradient-to-b from-[#f7f7f7] to-[#e6e6e6] border border-[#ccc] h-8 px-2 rounded-[2px] mb-3">
                    <h1 className="text-[12px] font-bold text-[#333]">
                        Konut <span className="text-[#666] font-normal text-[11px]">(150.234 ilan)</span>
                    </h1>
                    <div className="flex items-center space-x-2 text-[11px] text-[#333]">
                        <span>Sıralama:</span>
                        <select className="border border-[#ccc] rounded-[2px] h-6 bg-white text-[#333] text-[11px] px-1">
                            <option>Fiyata Göre (Önce En Yüksek)</option>
                            <option>Fiyata Göre (Önce En Düşük)</option>
                            <option>Tarihe Göre (Önce En Yeni)</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Layout: Sidebar + Results */}
            <div className="flex flex-col md:flex-row items-start px-4">
                <SearchSidebar />

                <div className="flex-1 w-full min-w-0">
                    {/* Info Box */}
                    <div className="mb-2 bg-[#e6f2ff] border border-[#bce8f1] p-2 text-[11px] text-[#31708f] rounded-[2px]">
                        Aradığınız kriterlere uygun <strong>150.234</strong> ilan bulundu.
                    </div>

                    <ListingTable />

                    {/* Pagination Classic */}
                    <div className="mt-4 flex justify-center mb-8">
                        <div className="flex items-center space-x-1 text-[12px]">
                            <button className="h-6 px-2.5 border border-[#ccc] bg-white text-[#333] hover:bg-[#eee] rounded-[2px]">Prev</button>
                            <button className="h-6 px-2.5 border border-[#ccc] bg-[#32669e] text-white font-bold rounded-[2px]">1</button>
                            <button className="h-6 px-2.5 border border-[#ccc] bg-white text-[#32669e] font-bold hover:bg-[#eee] rounded-[2px]">2</button>
                            <button className="h-6 px-2.5 border border-[#ccc] bg-white text-[#32669e] font-bold hover:bg-[#eee] rounded-[2px]">3</button>
                            <span className="px-1 text-[#666]">...</span>
                            <button className="h-6 px-2.5 border border-[#ccc] bg-white text-[#32669e] font-bold hover:bg-[#eee] rounded-[2px]">50</button>
                            <button className="h-6 px-2.5 border border-[#ccc] bg-white text-[#333] hover:bg-[#eee] rounded-[2px]">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
