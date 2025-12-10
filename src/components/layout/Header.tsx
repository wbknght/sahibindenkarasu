import Link from 'next/link';
import { Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Header() {
    return (
        <header className="bg-[#f8f8f8] border-b border-gray-200">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0 mr-8">
                    <span className="text-2xl font-bold text-black tracking-tight">
                        sahibindenkarasu<span className="text-[#ffd300]">.com</span>
                    </span>
                </Link>

                {/* Search Bar */}
                <div className="flex-1 max-w-xl relative hidden md:flex items-center">
                    <Input
                        type="text"
                        placeholder="Kelime, ilan no veya mağaza adı ile ara"
                        className="w-full h-10 pr-10 border-gray-300 focus-visible:ring-primary"
                    />
                    <Button size="icon" variant="ghost" className="absolute right-0 h-10 w-10 text-gray-500 hover:text-primary">
                        <Search className="h-5 w-5" />
                    </Button>
                    <Link href="#" className="ml-3 text-xs text-blue-700 hover:underline whitespace-nowrap font-medium">
                        Detaylı Arama
                    </Link>
                </div>

                {/* Right Actions */}
                <div className="flex items-center space-x-4 ml-4">
                    <Link href="/login" className="text-xs font-medium text-black hover:text-primary transition-colors">
                        Giriş Yap
                    </Link>
                    <span className="text-gray-300">|</span>
                    <Link href="/register" className="text-xs font-medium text-black hover:text-primary transition-colors">
                        Üye Ol
                    </Link>

                    <Button className="bg-[#32669e] hover:bg-[#204d80] text-white font-bold h-9 px-4 text-xs ml-2">
                        Ücretsiz İlan Ver
                    </Button>
                </div>
            </div>
        </header>
    );
}
