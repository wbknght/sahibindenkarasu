
"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function SearchSidebar() {
    return (
        <aside className="w-64 flex-shrink-0 mr-6 mb-8">
            {/* Search in Results */}
            <div className="mb-4">
                <h3 className="font-bold text-xs mb-2 text-gray-700">Kelime ile Ara</h3>
                <div className="relative">
                    <Input
                        type="text"
                        placeholder="sonuçlarda ara..."
                        className="h-8 text-xs pr-8"
                    />
                    <Search className="w-3 h-3 absolute right-2 top-2.5 text-gray-400" />
                </div>
            </div>

            <Accordion type="multiple" defaultValue={["address", "price", "m2", "rooms"]} className="w-full space-y-2">

                {/* Adress */}
                <AccordionItem value="address" className="border rounded-sm bg-gray-50 px-2">
                    <AccordionTrigger className="hover:no-underline py-2 text-xs font-bold text-blue-900">
                        Adres
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                        <div className="space-y-2">
                            <select className="w-full h-8 text-xs border border-gray-300 rounded px-2 bg-white">
                                <option>İl</option>
                                <option>İstanbul</option>
                                <option>Ankara</option>
                                <option>İzmir</option>
                            </select>
                            <select className="w-full h-8 text-xs border border-gray-300 rounded px-2 bg-white">
                                <option>İlçe</option>
                            </select>
                            <select className="w-full h-8 text-xs border border-gray-300 rounded px-2 bg-white">
                                <option>Mahalle</option>
                            </select>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Price */}
                <AccordionItem value="price" className="border rounded-sm bg-gray-50 px-2">
                    <AccordionTrigger className="hover:no-underline py-2 text-xs font-bold text-blue-900">
                        Fiyat (TL)
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                        <div className="flex space-x-2 items-center">
                            <Input type="number" placeholder="min" className="h-7 text-xs bg-white" />
                            <span className="text-gray-400 text-xs">-</span>
                            <Input type="number" placeholder="max" className="h-7 text-xs bg-white" />
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* M2 */}
                <AccordionItem value="m2" className="border rounded-sm bg-gray-50 px-2">
                    <AccordionTrigger className="hover:no-underline py-2 text-xs font-bold text-blue-900">
                        m² (Brüt)
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                        <div className="flex space-x-2 items-center">
                            <Input type="number" placeholder="min" className="h-7 text-xs bg-white" />
                            <span className="text-gray-400 text-xs">-</span>
                            <Input type="number" placeholder="max" className="h-7 text-xs bg-white" />
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Rooms */}
                <AccordionItem value="rooms" className="border rounded-sm bg-gray-50 px-2">
                    <AccordionTrigger className="hover:no-underline py-2 text-xs font-bold text-blue-900">
                        Oda Sayısı
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                        <div className="space-y-1 max-h-32 overflow-y-auto pl-1">
                            {["Stüdyo (1+0)", "1+1", "1.5+1", "2+0", "2+1", "2.5+1", "3+1", "3.5+1", "4+1", "4+2", "5+1"].map((room) => (
                                <div key={room} className="flex items-center space-x-2">
                                    <Checkbox id={`room-${room}`} className="h-3 w-3 rounded-[2px]" />
                                    <Label htmlFor={`room-${room}`} className="text-xs font-normal cursor-pointer text-gray-700">{room}</Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Building Age */}
                <AccordionItem value="age" className="border rounded-sm bg-gray-50 px-2">
                    <AccordionTrigger className="hover:no-underline py-2 text-xs font-bold text-blue-900">
                        Bina Yaşı
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                        <div className="space-y-1 max-h-32 overflow-y-auto pl-1">
                            {["0", "1", "2", "3", "4", "5-10 Arası", "11-15 Arası", "16-20 Arası"].map((age) => (
                                <div key={age} className="flex items-center space-x-2">
                                    <Checkbox id={`age-${age}`} className="h-3 w-3 rounded-[2px]" />
                                    <Label htmlFor={`age-${age}`} className="text-xs font-normal cursor-pointer text-gray-700">{age}</Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Floor */}
                <AccordionItem value="floor" className="border rounded-sm bg-gray-50 px-2">
                    <AccordionTrigger className="hover:no-underline py-2 text-xs font-bold text-blue-900">
                        Bulunduğu Kat
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                        <div className="space-y-1 max-h-32 overflow-y-auto pl-1">
                            {["Kot 1", "Zemin Kat", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map((floor) => (
                                <div key={floor} className="flex items-center space-x-2">
                                    <Checkbox id={`floor-${floor}`} className="h-3 w-3 rounded-[2px]" />
                                    <Label htmlFor={`floor-${floor}`} className="text-xs font-normal cursor-pointer text-gray-700">{floor}</Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

            </Accordion>

            <Button className="w-full mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold h-9 text-xs">
                Ara
            </Button>
        </aside>
    );
}
