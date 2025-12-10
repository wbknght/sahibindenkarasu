
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Phone, MessageSquare, MapPin, Eye, Calendar, Printer, Share2, Heart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock Data
const listing = {
    id: "123456",
    title: "Kadıköy Merkezde Deniz Manzaralı 3+1 Lüx Daire",
    price: "12.500.000 TL",
    location: "İstanbul / Kadıköy / Caferağa",
    date: "10 Aralık 2025",
    listingNo: "123456789",
    details: [
        { label: "İlan No", value: "123456789" },
        { label: "İlan Tarihi", value: "10 Aralık 2025" },
        { label: "Emlak Tipi", value: "Satılık Daire" },
        { label: "m² (Brüt)", value: "145" },
        { label: "m² (Net)", value: "120" },
        { label: "Oda Sayısı", value: "3+1" },
        { label: "Bina Yaşı", value: "5-10 Arası" },
        { label: "Bulunduğu Kat", value: "4" },
        { label: "Kat Sayısı", value: "10" },
        { label: "Isıtma", value: "Doğalgaz (Kombi)" },
        { label: "Banyo Sayısı", value: "2" },
        { label: "Balkon", value: "Var" },
        { label: "Eşyalı", value: "Hayır" },
        { label: "Krediye Uygun", value: "Evet" },
    ],
    seller: {
        name: "Ahmet Yılmaz",
        phone: "0532 123 45 67",
        since: "Aralık 2018",
        image: "https://github.com/shadcn.png"
    },
    description: `
    <p>Kadıköy'ün en nezih semtlerinden Caferağa'da, deniz manzaralı, geniş ve ferah dairemiz satılıktır.</p>
    <br/>
    <p><strong>Özellikler:</strong></p>
    <ul>
      <li>3 Oda 1 Salon</li>
      <li>Ebeveyn Banyolu</li>
      <li>Kapalı Otopark</li>
      <li>7/24 Güvenlik</li>
      <li>Merkezi Konum</li>
    </ul>
    <br/>
    <p>Metro ve toplu taşımaya yürüme mesafesindedir. Çarşıya, pazara yakındır. Yatırım için uygundur.</p>
  `,
    images: [
        "https://placehold.co/800x600/eee/31343C?text=Gorsel+1",
        "https://placehold.co/800x600/eee/31343C?text=Gorsel+2",
        "https://placehold.co/800x600/eee/31343C?text=Gorsel+3",
    ]
};

export default function ListingDetailPage({ params }: { params: { id: string } }) {
    // In a real app, fetch data based on params.id

    return (
        <div className="container mx-auto px-4 py-4 font-sans text-sm">
            {/* Breadcrumb */}
            <div className="mb-4">
                <Breadcrumb>
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
                            <BreadcrumbLink href="#">Konut</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Satılık</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Daire</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            {/* Title Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 pb-4 mb-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900">{listing.title}</h1>
                    <div className="mt-1 flex items-center space-x-4 text-xs text-gray-500">
                        <span>{listing.location}</span>
                    </div>
                </div>
                <div className="mt-4 md:mt-0 flex flex-col items-end">
                    <span className="text-2xl font-bold text-blue-800">{listing.price}</span>
                </div>
            </div>

            {/* Main Content Info */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Left Column: Gallery & Details */}
                <div className="lg:col-span-10">

                    {/* Gallery & Sidebar-like Details for Desktop layout often splits here too, 
               but for simplicity we'll do: Gallery (Left) | Key Details (Right) in a row */}
                    <div className="flex flex-col md:flex-row gap-4 mb-6">

                        {/* Image Gallery */}
                        <div className="w-full md:w-[600px] flex-shrink-0">
                            <div className="aspect-[4/3] w-full bg-gray-100 border border-gray-300 relative mb-2">
                                <img src={listing.images[0]} alt="Main" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex space-x-2 overflow-x-auto pb-2">
                                {listing.images.map((img, i) => (
                                    <div key={i} className="w-20 h-16 border border-gray-300 flex-shrink-0 cursor-pointer hover:border-blue-500">
                                        <img src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Key Details Table (Mini Sidebar next to image) */}
                        <div className="flex-1">
                            <Card className="rounded-sm border-gray-200 shadow-none border-0">
                                <CardContent className="p-0">
                                    <Table>
                                        <TableBody>
                                            {listing.details.map((detail, idx) => (
                                                <TableRow key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                                    <TableCell className="font-bold text-gray-700 py-2 w-1/2">{detail.label}</TableCell>
                                                    <TableCell className="text-red-600 font-medium py-2">{detail.value}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </div>

                    </div>

                    {/* Description Tabs area */}
                    <div className="w-full border border-gray-200 rounded-sm mt-8">
                        <div className="bg-gray-100 p-2 border-b border-gray-200 flex space-x-4">
                            <button className="px-4 py-2 bg-white border-t-2 border-blue-600 font-bold text-gray-800 text-xs">İlan Detayları</button>
                            <button className="px-4 py-2 hover:bg-white text-gray-600 text-xs">Konum</button>
                        </div>
                        <div className="p-6 text-gray-800 leading-relaxed text-sm">
                            <h3 className="font-bold text-lg mb-4 text-center border-b pb-2">İLAN AÇIKLAMASI</h3>
                            <div dangerouslySetInnerHTML={{ __html: listing.description }} />
                        </div>
                    </div>

                </div>

                {/* Right Sidebar: Seller & Actions (Usually sticky) */}
                <div className="lg:col-span-2 space-y-4">

                    {/* Seller Info */}
                    <Card className="rounded-sm border-gray-200 shadow-sm">
                        <div className="bg-gray-100 p-3 border-b border-gray-200">
                            <h3 className="font-bold text-gray-800 text-xs text-center">İlan Sahibi</h3>
                        </div>
                        <CardContent className="p-4 flex flex-col items-center">
                            <Avatar className="w-16 h-16 mb-2">
                                <AvatarImage src={listing.seller.image} />
                                <AvatarFallback>AY</AvatarFallback>
                            </Avatar>
                            <div className="text-center mb-4">
                                <p className="font-bold text-blue-900 text-sm">{listing.seller.name}</p>
                                <p className="text-xs text-gray-500">Üyelik Tarihi: {listing.seller.since}</p>
                            </div>

                            <div className="w-full space-y-2">
                                <Button className="w-full bg-[#32669e] hover:bg-[#204d80] text-white">
                                    <Phone className="mr-2 h-4 w-4" /> Ara
                                </Button>
                                <Button variant="outline" className="w-full border-gray-300">
                                    <MessageSquare className="mr-2 h-4 w-4" /> Mesaj Gönder
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Tools */}
                    <Card className="rounded-sm border-gray-200 shadow-sm">
                        <CardContent className="p-0">
                            <ul className="divide-y divide-gray-100 text-xs">
                                <li>
                                    <button className="w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center">
                                        <Heart className="mr-2 h-4 w-4 text-gray-400" /> Favorilerime Ekle
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center">
                                        <Printer className="mr-2 h-4 w-4 text-gray-400" /> Yazdır
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center">
                                        <Share2 className="mr-2 h-4 w-4 text-gray-400" /> Paylaş
                                    </button>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <div className="bg-yellow-50 border border-yellow-200 p-3 text-xs text-gray-600 rounded-sm">
                        <p className="font-semibold mb-1">Güvenlik İpuçları</p>
                        <p>Kapora ödemeyin, ürünü görmeden almayın.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
