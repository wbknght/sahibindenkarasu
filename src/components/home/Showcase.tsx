import Link from "next/link"; // Correct import from next/link
import { Card, CardContent } from "@/components/ui/card";

// Mock data for showcase items
const showcaseItems = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    title: "Sahibinden Temiz Araç " + (i + 1),
    image: "https://placehold.co/240x180/eee/31343C?text=Ilan+Resmi",
    price: "1.250.000 TL",
    location: "İstanbul / Kadıköy"
}));

export function Showcase() {
    return (
        <div className="flex-1">
            <h2 className="text-sm font-bold text-gray-700 mb-2 border-b-2 border-yellow-400 pb-1 w-full flex justify-between items-center">
                <span>Anasayfa Vitrini</span>
                <Link href="#" className="text-xs font-normal text-blue-700 hover:underline">Tümünü Göster</Link>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {showcaseItems.map((item) => (
                    <Link href={`/listing/${item.id}`} key={item.id} className="group">
                        <Card className="rounded-sm border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden group-hover:border-blue-300">
                            <div className="aspect-[4/3] w-full bg-gray-100 relative">
                                {/* Use a simple img tag for placeholder or Next.js Image with remote patterns configured */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <CardContent className="p-2">
                                <h3 className="text-xs font-semibold text-blue-900 group-hover:underline line-clamp-2 h-8 leading-4 mb-2">
                                    {item.title}
                                </h3>
                                <div className="flex justify-between items-end mt-auto">
                                    <span className="text-xs font-bold text-black">{item.price}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
