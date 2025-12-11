"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Phone, MessageSquare, Printer, Share2, Heart, Flag, Check } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table";

// Mock Data
const listing = {
    id: "123456789",
    title: "Kadıköy Merkezde Deniz Manzaralı 3+1 Lüks Daire",
    price: "12.500.000 TL",
    location: "İstanbul / Kadıköy / Caferağa",
    date: "10 Aralık 2025",
    seller: {
        name: "Ahmet Yılmaz",
        membershipDate: "Aralık 2018",
        phone: "0 (532) 123 45 67",
        title: "Diğer İlanları",
        image: "/agent_photo.png"
    },
    images: [
        "/apartment_exterior.png",
        "/apartment_interior.png",
        "/apartment_exterior.png",
    ],
    details: {
        m2_brut: 145,
        m2_net: 120,
        rooms: "3+1",
        age: "5-10 Arası",
        floor: 4,
        heating: "Doğalgaz (Kombi)",
        balcony: true,
        furnished: false,
        kredi: true,
    }
};

// All possible features for the "Ghost" grid
const allFeatures = {
    internal: [
        "ADSL", "Ahşap Doğrama", "Alarm (Hırsız)", "Alarm (Yangın)", "Alaturka Tuvalet",
        "Alüminyum Doğrama", "Amerikan Kapı", "Amerikan Mutfak", "Ankastre Fırın",
        "Asansör", "Balkon", "Barbekü", "Beyaz Eşya", "Boyalı", "Bulaşık Makinesi",
        "Çamaşır Kurutma Mak.", "Çamaşır Makinesi", "Çelik Kapı", "Duşakabin", "Duvar Kağıdı"
    ],
    external: [
        "Araç Park Yeri", "Asansör", "Bahçeli", "Fitness", "Güvenlik", "Hidrofor",
        "Isı Yalıtımı", "Jeneratör", "Kapıcı", "Otopark - Açık", "Otopark - Kapalı",
        "Oyun Parkı", "PVC Doğrama", "Site İçerisinde", "Su Deposu", "Yangın Merdiveni",
        "Tenis Kortu", "Yüzme Havuzu"
    ],
    location: [
        "Arka Cephe", "Cadde Üzerinde", "Deniz Manzaralı", "E-5'e Yakın", "Havaalanına Yakın",
        "Manzara - Deniz", "Manzara - Doğa", "Manzara - Şehir", "Merkezde", "Metroya Yakın",
        "Minibüs / Dolmuş", "Ön Cephe", "Otobüs Durağına Yakın", "Sahile Yakın", "TEM'e Yakın",
        "Tramvay Durağına Yakın"
    ]
};

// Features present in this specific listing
const listingFeatures = [
    "ADSL", "Ahşap Doğrama", "Alarm (Hırsız)", "Alüminyum Doğrama", "Amerikan Kapı",
    "Ankastre Fırın", "Asansör", "Balkon", "Boyalı", "Çelik Kapı", "Duşakabin",
    "Araç Park Yeri", "Güvenlik", "Isı Yalıtımı", "Otopark - Kapalı", "Site İçerisinde",
    "Cadde Üzerinde", "Deniz Manzaralı", "Manzara - Deniz", "Merkezde", "Metroya Yakın"
];

export default function ListingDetailPage({ params }: { params: { id: string } }) {
    return (
        <div className="font-arial text-[#333]">
            {/* Top Row: Breadcrumb & Actions (Full Width Grey) */}
            <div className="w-full bg-[#f5f5f5] border-b border-[#e0e0e0]">
                <div className="w-[1150px] mx-auto flex justify-between items-center py-2">
                    {/* Breadcrumb */}
                    <div className="text-[11px] text-[#333]">
                        <Link href="/" className="hover:underline text-[#003399]">Anasayfa</Link>
                        <span className="text-[#999] mx-1">&gt;</span>
                        <Link href="#" className="hover:underline text-[#003399]">Emlak</Link>
                        <span className="text-[#999] mx-1">&gt;</span>
                        <Link href="#" className="hover:underline text-[#003399]">Konut</Link>
                        <span className="text-[#999] mx-1">&gt;</span>
                        <Link href="#" className="hover:underline text-[#003399]">Satılık</Link>
                        <span className="text-[#999] mx-1">&gt;</span>
                        <Link href="#" className="hover:underline text-[#003399]">Daire</Link>
                        <span className="text-[#999] mx-1">&gt;</span>
                        <Link href="#" className="hover:underline text-[#003399]">İstanbul Satılık Daire</Link>
                        <span className="text-[#999] mx-1">&gt;</span>
                        <Link href="#" className="hover:underline text-[#003399]">Kadıköy Satılık Daire</Link>
                        <span className="text-[#999] mx-1">&gt;</span>
                        <Link href="#" className="hover:underline text-[#003399]">Caferağa Satılık Daire</Link>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2">
                        <button className="text-[11px] text-[#003399] hover:underline flex items-center gap-1">
                            <Heart size={14} /> Favorilerime Ekle
                        </button>
                        <span className="text-[#ccc]">|</span>
                        <button className="text-[11px] text-[#003399] hover:underline flex items-center gap-1">
                            <Printer size={14} /> Yazdır
                        </button>
                        <span className="text-[#ccc]">|</span>
                        <button className="text-[11px] text-[#003399] hover:underline flex items-center gap-1">
                            <Share2 size={14} /> Paylaş
                        </button>
                    </div>
                </div>
            </div>

            {/* Main White Content Area (Full Width White) */}
            <div className="w-full bg-white">
                <div className="w-[1150px] mx-auto p-4 pt-4">
                    {/* Title Row */}
                    <div className="mb-4 border-b border-[#e0e0e0] pb-2">
                        <h1 className="text-[18px] font-bold text-[#333] mb-1 leading-tight">{listing.title}</h1>
                    </div>

                    <div className="flex items-start space-x-4">
                        {/* Left Column: Gallery */}
                        <div className="w-[480px]">
                            <div className="mb-2 border border-[#ccc] p-1 bg-white">
                                <img src={listing.images[0]} className="w-full h-[360px] object-cover" alt="Main" />
                            </div>
                            <div className="flex space-x-1 overflow-x-auto pb-2">
                                {listing.images.map((img, i) => (
                                    <div key={i} className="w-[80px] h-[60px] border border-[#ccc] p-[1px] cursor-pointer hover:border-blue-500">
                                        <img src={img} className="w-full h-full object-cover" alt={`thumb-${i}`} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Center Column: Details Table */}
                        <div className="flex-1 text-right">
                            {/* Price Display */}
                            <div className="text-[20px] font-bold text-[#32669e] mb-2 pb-1">
                                {listing.price}
                            </div>

                            <div className="mb-4">
                                <Table>
                                    <TableBody>
                                        <TableRow className="h-6 border-b border-[#f0f0f0]">
                                            <TableCell className="font-bold text-[12px] py-1 text-[#333] text-left">İlan No</TableCell>
                                            <TableCell className="text-[12px] py-1 text-[#cc0000] font-bold text-right">{listing.id}</TableCell>
                                        </TableRow>
                                        <TableRow className="h-6 border-b border-[#f0f0f0]">
                                            <TableCell className="font-bold text-[12px] py-1 text-[#333] text-left">İlan Tarihi</TableCell>
                                            <TableCell className="text-[12px] py-1 text-[#333] text-right">{listing.date}</TableCell>
                                        </TableRow>
                                        <TableRow className="h-6 border-b border-[#f0f0f0]">
                                            <TableCell className="font-bold text-[12px] py-1 text-[#333] text-left">Emlak Tipi</TableCell>
                                            <TableCell className="text-[12px] py-1 text-[#333] text-right">Satılık Daire</TableCell>
                                        </TableRow>
                                        <TableRow className="h-6 border-b border-[#f0f0f0]">
                                            <TableCell className="font-bold text-[12px] py-1 text-[#333] text-left">Konum</TableCell>
                                            <TableCell className="text-[12px] py-1 text-[#333] text-right">{listing.location}</TableCell>
                                        </TableRow>
                                        <TableRow className="h-6 border-b border-[#f0f0f0]">
                                            <TableCell className="font-bold text-[12px] py-1 text-[#333] text-left">m² (Brüt)</TableCell>
                                            <TableCell className="text-[12px] py-1 text-[#333] text-right">{listing.details.m2_brut}</TableCell>
                                        </TableRow>
                                        <TableRow className="h-6 border-b border-[#f0f0f0]">
                                            <TableCell className="font-bold text-[12px] py-1 text-[#333] text-left">m² (Net)</TableCell>
                                            <TableCell className="text-[12px] py-1 text-[#333] text-right">{listing.details.m2_net}</TableCell>
                                        </TableRow>
                                        <TableRow className="h-6 border-b border-[#f0f0f0]">
                                            <TableCell className="font-bold text-[12px] py-1 text-[#333] text-left">Oda Sayısı</TableCell>
                                            <TableCell className="text-[12px] py-1 text-[#333] text-right">{listing.details.rooms}</TableCell>
                                        </TableRow>
                                        <TableRow className="h-6 border-b border-[#f0f0f0]">
                                            <TableCell className="font-bold text-[12px] py-1 text-[#333] text-left">Bina Yaşı</TableCell>
                                            <TableCell className="text-[12px] py-1 text-[#cc0000] text-right">{listing.details.age}</TableCell>
                                        </TableRow>
                                        <TableRow className="h-6 border-b border-[#f0f0f0]">
                                            <TableCell className="font-bold text-[12px] py-1 text-[#333] text-left">Bulunduğu Kat</TableCell>
                                            <TableCell className="text-[12px] py-1 text-[#333] text-right">{listing.details.floor}</TableCell>
                                        </TableRow>
                                        <TableRow className="h-6 border-b border-[#f0f0f0]">
                                            <TableCell className="font-bold text-[12px] py-1 text-[#333] text-left">Isıtma</TableCell>
                                            <TableCell className="text-[12px] py-1 text-[#333] text-right">{listing.details.heating}</TableCell>
                                        </TableRow>
                                        <TableRow className="h-6 border-b border-[#f0f0f0]">
                                            <TableCell className="font-bold text-[12px] py-1 text-[#333] text-left">Krediye Uygun</TableCell>
                                            <TableCell className="text-[12px] py-1 text-[#cc0000] font-bold text-right py-1">Evet</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </div>

                        {/* Right Column: Seller Box & Actions */}
                        <div className="w-[280px] space-y-4">
                            {/* Seller Box */}
                            <div className="border border-[#e0e0e0] bg-[#fcfcfc] shadow-sm">
                                <div className="bg-[#f5f5f5] px-3 py-2 border-b border-[#e0e0e0]">
                                    <h3 className="text-[12px] font-bold text-[#333]">İlan Sahibi</h3>
                                </div>
                                <div className="p-4 text-center">
                                    <div className="w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden border border-[#ccc]">
                                        <img src={listing.seller.image} alt={listing.seller.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-[13px] font-bold text-[#32669e] mb-1">{listing.seller.name}</div>
                                    <div className="text-[11px] text-[#003399] hover:underline mb-2">{listing.seller.title}</div>
                                    <div className="text-[11px] text-[#666] mb-4">Üyelik Tarihi: {listing.seller.membershipDate}</div>

                                    <div className="space-y-2">
                                        <Button className="w-full h-8 bg-[#32669e] hover:bg-[#204d80] text-white font-bold text-[12px] rounded-[2px] flex items-center justify-center gap-2">
                                            <Phone size={14} /> Cep No'yu Göster
                                        </Button>
                                        <Button variant="outline" className="w-full h-8 border-[#ccc] bg-white text-[#333] hover:bg-[#f5f5f5] font-bold text-[12px] rounded-[2px] flex items-center justify-center gap-2">
                                            <MessageSquare size={14} /> Mesaj Gönder
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Tips */}
                            <div className="bg-[#fff9e6] border border-[#ffe59e] p-3 text-[11px] text-[#333]">
                                <h4 className="font-bold mb-1">Güvenlik İpuçları</h4>
                                <p className="leading-tight">Kapora ödemeyin, ürünü görmeden almayın.</p>
                            </div>
                        </div>
                    </div>

                    {/* Tabs / Description */}
                    <div className="mt-6 mb-8">
                        <div className="bg-[#f0f0f0] border-b border-[#ccc] flex">
                            <div className="bg-[#ffd300] px-4 py-2 text-[12px] font-bold text-[#333] border-t-2 border-[#cca900] cursor-default bg-white border-b-white z-10 -mb-[1px]">
                                İlan Detayları
                            </div>
                            <div className="px-4 py-2 text-[12px] font-bold text-[#666] hover:text-[#333] cursor-pointer">
                                Konum
                            </div>
                            <div className="px-4 py-2 text-[12px] font-bold text-[#666] hover:text-[#333] cursor-pointer">
                                Harita
                            </div>
                            <div className="px-4 py-2 text-[12px] font-bold text-[#666] hover:text-[#333] cursor-pointer">
                                Sokak Görünümü
                            </div>
                        </div>

                        <div className="bg-[#f9f9f9] border border-[#e0e0e0] border-t-0 p-6 mn-h-[200px] mt-[1px]">
                            {/* Branding Banner Placeholder */}
                            <div className="mb-8 flex justify-center">
                                <img
                                    src="/real_estate_logo.png"
                                    alt="Branding"
                                    className="border border-[#ccc] shadow-sm max-h-[150px] object-contain bg-white p-2 w-[600px]"
                                />
                            </div>

                            <h3 className="text-center text-[14px] font-bold text-[#333] mb-6">İLAN AÇIKLAMASI</h3>

                            {/* Description Text */}
                            <div className="text-[12px] text-[#333] leading-relaxed max-w-3xl mx-auto mb-8 border-b border-[#e0e0e0] pb-6 text-center">
                                <p className="mb-4">
                                    <b>SONSUZ GAYRİMENKUL'DEN</b> Kadıköy'ün en nezih semtlerinden Caferağa'da, deniz manzaralı, geniş ve ferah dairemiz sizleri bekliyor.
                                </p>
                                <div className="bg-[#76b82a] text-white p-2 rounded-[2px] inline-block mb-4 font-bold">
                                    HAYALLERİNİZE ULAŞMAK ARTIK ÇOK KOLAY!
                                </div>
                                <p>
                                    Metro ve toplu taşımaya yürüme mesafesindedir. Çarşıya, pazara yakındır. Yatırım için uygundur.
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="max-w-4xl mx-auto space-y-6">
                                {/* Internal Features */}
                                <div>
                                    <h4 className="text-[12px] font-bold text-[#32669e] bg-[#fff9c4] p-1 mb-2 border-b border-[#fbc02d]">İç Özellikler</h4>
                                    <div className="grid grid-cols-4 gap-2">
                                        {allFeatures.internal.map((feature, i) => {
                                            const isActive = listingFeatures.includes(feature);
                                            return (
                                                <div key={i} className="flex items-center space-x-1">
                                                    <span className={`text-[11px] ${isActive ? "font-bold text-[#333]" : "text-[#999]"}`}>
                                                        {feature}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* External Features */}
                                <div>
                                    <h4 className="text-[12px] font-bold text-[#32669e] bg-[#fff9c4] p-1 mb-2 border-b border-[#fbc02d]">Dış Özellikler</h4>
                                    <div className="grid grid-cols-4 gap-2">
                                        {allFeatures.external.map((feature, i) => {
                                            const isActive = listingFeatures.includes(feature);
                                            return (
                                                <div key={i} className="flex items-center space-x-1">
                                                    <span className={`text-[11px] ${isActive ? "font-bold text-[#333]" : "text-[#999]"}`}>
                                                        {feature}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Location */}
                                <div>
                                    <h4 className="text-[12px] font-bold text-[#32669e] bg-[#fff9c4] p-1 mb-2 border-b border-[#fbc02d]">Konum</h4>
                                    <div className="grid grid-cols-4 gap-2">
                                        {allFeatures.location.map((feature, i) => {
                                            const isActive = listingFeatures.includes(feature);
                                            return (
                                                <div key={i} className="flex items-center space-x-1">
                                                    <span className={`text-[11px] ${isActive ? "font-bold text-[#333]" : "text-[#999]"}`}>
                                                        {feature}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Footer Banner */}
                            <div className="mt-8 flex justify-center border-t border-[#e0e0e0] pt-6">
                                <img
                                    src="/real_estate_logo.png"
                                    alt="Footer Branding"
                                    className="border border-[#ccc] shadow-sm max-h-[80px] object-contain bg-white p-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

