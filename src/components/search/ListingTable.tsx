
"use client";

import Link from "next/link";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

// Mock Data
const listings = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    image: "https://placehold.co/120x90/eee/31343C?text=Resim",
    title: `Fırsat Daire! Metrobüse 5 dk, Güney Cephe ${i + 1}`,
    price: `${(Math.floor(Math.random() * 200) + 100) * 10000} TL`,
    date: "10 Ara 2025",
    location: {
        city: "İstanbul",
        district: "Kadıköy",
        neighborhood: "Caferağa Mah."
    },
    m2: 120,
    rooms: "3+1"
}));

export function ListingTable() {
    return (
        <div className="border-t border-l border-r border-[#ccc]">
            <Table className="w-full border-collapse">
                <TableHeader>
                    <TableRow className="bg-[#f0f0f0] bg-gradient-to-b from-[#ffffff] to-[#e0e0e0] h-7 border-b border-[#ccc]">
                        <TableHead className="w-[124px] py-0 px-2 text-center font-bold text-[#333] text-[11px] border-r border-[#ccc]">Fotoğraf</TableHead>
                        <TableHead className="py-0 px-2 font-bold text-[#333] text-[11px] border-r border-[#ccc]">İlan Başlığı</TableHead>
                        <TableHead className="w-[80px] py-0 px-2 font-bold text-[#333] text-[11px] text-right border-r border-[#ccc]">m² (Brüt)</TableHead>
                        <TableHead className="w-[80px] py-0 px-2 font-bold text-[#333] text-[11px] text-right border-r border-[#ccc]">Oda Sayısı</TableHead>
                        <TableHead className="w-[110px] py-0 px-2 font-bold text-[#333] text-[11px] text-right border-r border-[#ccc]">Fiyat</TableHead>
                        <TableHead className="w-[90px] py-0 px-2 font-bold text-[#333] text-[11px] border-r border-[#ccc]">İlan Tarihi</TableHead>
                        <TableHead className="w-[130px] py-0 px-2 font-bold text-[#333] text-[11px]">İl / İlçe</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {listings.map((item) => (
                        <TableRow key={item.id} className="h-[95px] border-b border-[#ccc] hover:bg-[#ffffd0] transition-colors group">
                            <TableCell className="p-1 border-r border-[#eee] text-center align-middle w-[124px]">
                                <div className="w-[120px] h-[90px] border border-[#ddd] p-[1px] bg-white mx-auto">
                                    <img
                                        src={item.image}
                                        alt="thumb"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </TableCell>
                            <TableCell className="p-2 border-r border-[#eee] align-middle">
                                <Link href={`/listing/${item.id}`} className="block">
                                    <h3 className="text-[12px] font-bold text-[#2e5077] group-hover:underline leading-tight">
                                        {item.title}
                                    </h3>
                                </Link>
                            </TableCell>
                            <TableCell className="p-2 border-r border-[#eee] text-right text-[11px] text-[#333] align-middle">{item.m2}</TableCell>
                            <TableCell className="p-2 border-r border-[#eee] text-right text-[11px] text-[#333] align-middle">{item.rooms}</TableCell>
                            <TableCell className="p-2 border-r border-[#eee] text-right font-bold text-[#32669e] text-[12px] align-middle">
                                {item.price}
                            </TableCell>
                            <TableCell className="p-2 border-r border-[#eee] text-[11px] text-[#333] align-middle">
                                {item.date}
                            </TableCell>
                            <TableCell className="p-2 text-[11px] text-[#333] align-middle leading-tight">
                                <div className="flex flex-col">
                                    <span>{item.location.city}</span>
                                    <span>{item.location.district}</span>
                                    <span className="text-[#666]">{item.location.neighborhood}</span>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
