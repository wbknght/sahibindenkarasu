
"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

export function SearchSidebar() {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        address: true,
        price: true,
        m2: true,
        rooms: true,
        age: false,
        floor: false
    });

    const toggleSection = (section: string) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const SidebarSection = ({ id, title, children }: { id: string, title: string, children: React.ReactNode }) => (
        <div className="border border-gray-300 rounded-[2px] mb-2 bg-[#f8f8f8]">
            <button
                onClick={() => toggleSection(id)}
                className="w-full flex justify-between items-center px-2 py-1.5 text-left bg-gradient-to-b from-white to-[#f0f0f0]"
            >
                <span className="text-[11px] font-bold text-[#333] uppercase">{title}</span>
                {openSections[id] ? <ChevronUp className="w-3 h-3 text-gray-500" /> : <ChevronDown className="w-3 h-3 text-gray-500" />}
            </button>
            {openSections[id] && (
                <div className="p-2 border-t border-gray-200 bg-white">
                    {children}
                </div>
            )}
        </div>
    );

    return (
        <aside className="w-[200px] flex-shrink-0 mr-4">
            {/* Search in Results */}
            <div className="mb-3 bg-[#e6e6e6] p-2 rounded-[2px] border border-[#ccc]">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Kelime ile ara..."
                        className="w-full h-6 text-[11px] px-2 border border-[#999] rounded-[2px]"
                    />
                    <Search className="w-3 h-3 absolute right-2 top-1.5 text-gray-500" />
                </div>
            </div>

            <SidebarSection id="address" title="Adres">
                <div className="space-y-1.5">
                    <select className="w-full h-6 text-[11px] border border-[#ccc] rounded-[2px] bg-white text-[#333]">
                        <option>Tüm İller</option>
                        <option>İstanbul</option>
                        <option>Ankara</option>
                        <option>İzmir</option>
                    </select>
                    <select className="w-full h-6 text-[11px] border border-[#ccc] rounded-[2px] bg-white text-[#333]">
                        <option>Tüm İlçeler</option>
                    </select>
                    <select className="w-full h-6 text-[11px] border border-[#ccc] rounded-[2px] bg-white text-[#333]">
                        <option>Mahalle</option>
                    </select>
                </div>
            </SidebarSection>

            <SidebarSection id="price" title="Fiyat (TL)">
                <div className="flex space-x-1 items-center">
                    <input type="text" placeholder="min" className="w-1/2 h-6 text-[11px] px-1 border border-[#ccc] rounded-[2px]" />
                    <input type="text" placeholder="max" className="w-1/2 h-6 text-[11px] px-1 border border-[#ccc] rounded-[2px]" />
                </div>
            </SidebarSection>

            <SidebarSection id="m2" title="m² (Brüt)">
                <div className="flex space-x-1 items-center">
                    <input type="text" placeholder="min" className="w-1/2 h-6 text-[11px] px-1 border border-[#ccc] rounded-[2px]" />
                    <input type="text" placeholder="max" className="w-1/2 h-6 text-[11px] px-1 border border-[#ccc] rounded-[2px]" />
                </div>
            </SidebarSection>

            <SidebarSection id="rooms" title="Oda Sayısı">
                <div className="space-y-1 max-h-40 overflow-y-auto pl-1 custom-scrollbar">
                    {["Stüdyo (1+0)", "1+1", "1.5+1", "2+0", "2+1", "2.5+1", "3+1", "3.5+1", "4+1", "4+2", "5+1", "5+2", "6+1", "6+2"].map((room) => (
                        <div key={room} className="flex items-center space-x-2">
                            <Checkbox id={`room-${room}`} className="h-3 w-3 rounded-[2px] border-[#999]" />
                            <label htmlFor={`room-${room}`} className="text-[11px] font-normal cursor-pointer text-[#333]">{room}</label>
                        </div>
                    ))}
                </div>
            </SidebarSection>

            <SidebarSection id="age" title="Bina Yaşı">
                <div className="space-y-1 max-h-32 overflow-y-auto pl-1 custom-scrollbar">
                    {["0", "1", "2", "3", "4", "5-10 Arası", "11-15 Arası", "16-20 Arası", "21 ve üzeri"].map((age) => (
                        <div key={age} className="flex items-center space-x-2">
                            <Checkbox id={`age-${age}`} className="h-3 w-3 rounded-[2px] border-[#999]" />
                            <label htmlFor={`age-${age}`} className="text-[11px] font-normal cursor-pointer text-[#333]">{age}</label>
                        </div>
                    ))}
                </div>
            </SidebarSection>

            <Button className="w-full mt-2 bg-[#32669e] hover:bg-[#204d80] text-white font-bold h-7 text-[12px] rounded-[2px] shadow-sm">
                Ara
            </Button>
        </aside>
    );
}
