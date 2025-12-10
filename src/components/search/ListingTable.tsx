
"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Mock Data matching the screenshot structure
const listings = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    image: "https://placehold.co/120x90/eee/31343C?text=Resim",
    title: `Sahibinden Satılık Lüks Daire ${i + 1} - Fırsat!`,
    price: `${(Math.floor(Math.random() * 200) + 100) * 10000} TL`, // Random price like 1.500.000 TL
    date: "10 Ara 2025",
    location: {
        city: "İstanbul",
        district: "Kadıköy",
        neighborhood: "Caferağa"
    }
}));

export function ListingTable() {
    return (
        <div className="bg-white border rounded-sm">
            <Table>
                <TableHeader className="bg-gradient-to-b from-gray-100 to-gray-200 border-b-2 border-gray-300">
                    <TableRow className="h-8 hover:bg-transparent">
                        <TableHead className="w-[120px] py-1 text-center font-bold text-gray-700 text-xs border-r">Fotoğraf</TableHead>
                        <TableHead className="py-1 font-bold text-gray-700 text-xs border-r">İlan Başlığı</TableHead>
                        <TableHead className="w-[100px] py-1 font-bold text-gray-700 text-xs text-right border-r">m² (Brüt)</TableHead>
                        <TableHead className="w-[80px] py-1 font-bold text-gray-700 text-xs text-right border-r">Oda Sayısı</TableHead>
                        <TableHead className="w-[120px] py-1 font-bold text-gray-700 text-xs text-right border-r">Fiyat</TableHead>
                        <TableHead className="w-[100px] py-1 font-bold text-gray-700 text-xs border-r">İlan Tarihi</TableHead>
                        <TableHead className="w-[140px] py-1 font-bold text-gray-700 text-xs">İl / İlçe</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {listings.map((item) => (
                        <TableRow key={item.id} className="h-[100px] hover:bg-yellow-50 group transition-colors">
                            <TableCell className="p-1 border-r text-center align-middle">
                                <div className="relative w-[120px] h-[90px] mx-auto border border-gray-300">
                                    <img
                                        src={item.image}
                                        alt="thumb"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </TableCell>
                            <TableCell className="p-2 border-r align-middle">
                                <Link href={`/listing/${item.id}`} className="block">
                                    <h3 className="text-sm font-semibold text-blue-900 group-hover:underline line-clamp-2 leading-tight">
                                        {item.title}
                                    </h3>
                                    <div className="mt-2" />
                                    <Badge variant="outline" className="text-[10px] text-gray-500 font-normal border-gray-300 h-5 px-1">
                                        Krediye Uygun
                                    </Badge>
                                </Link>
                            </TableCell>
                            <TableCell className="p-2 border-r text-right text-xs text-gray-600 align-middle">120</TableCell>
                            <TableCell className="p-2 border-r text-right text-xs text-gray-600 align-middle">3+1</TableCell>
                            <TableCell className="p-2 border-r text-right font-bold text-blue-900 text-sm align-middle">
                                {item.price}
                            </TableCell>
                            <TableCell className="p-2 border-r text-xs text-gray-600 align-middle">
                                {item.date}
                            </TableCell>
                            <TableCell className="p-2 text-xs text-blue-900 align-middle">
                                <div className="flex flex-col">
                                    <span className="font-semibold">{item.location.city}</span>
                                    <span>{item.location.district}</span>
                                    <span className="text-gray-500">{item.location.neighborhood}</span>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
