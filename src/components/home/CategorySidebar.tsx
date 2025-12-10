import Link from 'next/link';

const categories = [
    { name: 'Emlak', href: '/category/emlak' },
    { name: 'Vasıta', href: '/category/vasita' },
    { name: 'Yedek Parça, Aksesuar, Donanım & Tuning', href: '/category/yedek-parca' },
    { name: 'İkinci El ve Sıfır Alışveriş', href: '/category/alisveris' },
    { name: 'İş Makineleri & Sanayi', href: '/category/is-makineleri' },
    { name: 'Ustalar ve Hizmetler', href: '/category/hizmetler' },
    { name: 'Özel Ders Verenler', href: '/category/ozel-ders' },
    { name: 'İş İlanları', href: '/category/is-ilanlari' },
    { name: 'Yardımcı Arayanlar', href: '/category/yardimci' },
    { name: 'Hayvanlar Alemi', href: '/category/hayvanlar' },
];

export function CategorySidebar() {
    return (
        <aside className="w-56 flex-shrink-0 mr-4 border border-gray-200 rounded-sm bg-white p-0">
            <ul className="divide-y divide-gray-100">
                {categories.map((cat) => (
                    <li key={cat.name}>
                        <Link
                            href={cat.href}
                            className="block px-3 py-2 text-xs font-semibold text-blue-900 hover:text-red-600 hover:bg-blue-50 transition-colors truncate"
                            title={cat.name}
                        >
                            {cat.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
