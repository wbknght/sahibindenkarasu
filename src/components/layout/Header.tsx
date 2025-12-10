import Link from 'next/link';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Header() {
    return (
        <header className="bg-[#29333f] border-b border-[#1c232b]">
            <div className="mx-auto w-[1150px] px-0 h-[46px] flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0 mr-4 no-underline">
                    <div className="bg-[#ffd300] px-2 py-1 flex items-center h-[46px]">
                        <span className="text-[18px] font-bold text-black tracking-tighter">
                            sahibindenkarasu.com
                        </span>
                    </div>
                </Link>

                {/* Search Bar */}
                <div className="flex-1 max-w-[480px] relative flex items-center ml-2">
                    <Input
                        type="text"
                        placeholder="Kelime, ilan no veya mağaza adı ile ara"
                        className="w-full h-[30px] pr-8 border-[#1c232b] bg-[#3b4655] text-white placeholder:text-[#8e9bad] text-[12px] focus-visible:ring-0 rounded-[2px]"
                    />
                    <Search className="h-4 w-4 text-[#8e9bad] absolute right-2" />
                    <Link href="#" className="ml-2 text-[11px] text-[#8e9bad] hover:underline whitespace-nowrap">
                        Detaylı Arama
                    </Link>
                </div>

                {/* Right Actions */}
                <div className="flex items-center ml-auto">
                    <div className="flex items-center space-x-2 text-[11px] text-[#ccc] mr-3">
                        <Link href="/login" className="hover:text-white hover:underline">Giriş Yap</Link>
                        <span>|</span>
                        <Link href="/register" className="hover:text-white hover:underline">Üye Ol</Link>
                    </div>

                    <Button className="bg-gradient-to-b from-[#408ac7] to-[#2c6fa5] hover:from-[#509ad7] hover:to-[#3c7fb5] text-white font-bold h-[30px] px-3 text-[11px] rounded-[2px] shadow-sm border border-[#20527c] ml-1">
                        Ücretsiz İlan Ver
                    </Button>
                </div>
            </div>
        </header>
    );
}
