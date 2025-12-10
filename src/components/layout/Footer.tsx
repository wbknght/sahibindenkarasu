import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 pt-10 pb-6 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h4 className="font-bold mb-4 text-sm">Kurumsal</h4>
                        <ul className="space-y-2 text-xs text-gray-600">
                            <li><Link href="#" className="hover:underline">Hakkımızda</Link></li>
                            <li><Link href="#" className="hover:underline">Ödüllerimiz</Link></li>
                            <li><Link href="#" className="hover:underline">Kurumsal Üyelik</Link></li>
                            <li><Link href="#" className="hover:underline">Reklam</Link></li>
                            <li><Link href="#" className="hover:underline">İnsan Kaynakları</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-sm">Hizmetlerimiz</h4>
                        <ul className="space-y-2 text-xs text-gray-600">
                            <li><Link href="#" className="hover:underline">Doping</Link></li>
                            <li><Link href="#" className="hover:underline">S-Param Güvende</Link></li>
                            <li><Link href="#" className="hover:underline">Güvenli E-Ticaret</Link></li>
                            <li><Link href="#" className="hover:underline">Mobil Uygulamalar</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-sm">Gizlilik ve Kullanım</h4>
                        <ul className="space-y-2 text-xs text-gray-600">
                            <li><Link href="#" className="hover:underline">Güvenli Alışverişin İpuçları</Link></li>
                            <li><Link href="#" className="hover:underline">Kullanım Koşulları</Link></li>
                            <li><Link href="#" className="hover:underline">Gizlilik Politikası</Link></li>
                            <li><Link href="#" className="hover:underline">Çerez Yönetimi</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-sm">Bizi Takip Edin</h4>
                        <div className="flex space-x-4 mb-4">
                            {/* Social icons would go here */}
                            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        </div>
                        <p className="text-xs text-gray-500">
                            7/24 Müşteri Hizmetleri
                        </p>
                    </div>
                </div>
                <div className="text-center md:text-left pt-6 border-t border-gray-100">
                    <p className="text-xs text-gray-400">
                        © 2000-2024 sahibinden.com - Tüm Hakları Saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    );
}
