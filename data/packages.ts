export interface Package {
    id: string;
    title: string;
    destination: string;
    duration: string;
    price: number;
    image: string;
    features: string[];
    rating: number;
}

export const TOUR_PACKAGES: Package[] = [
    {
        id: 'pkg-bali',
        title: 'Bali Tour Package',
        destination: 'Bali, Indonesia',
        duration: '5 Days / 4 Nights',
        price: 285,
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop',
        rating: 4.9,
        features: ['Temple Visits', 'Beach Activities', 'Cultural Shows', 'Airport Transfer'],
    },
    {
        id: 'pkg-java',
        title: 'Java Tour Package',
        destination: 'Java, Indonesia',
        duration: '6 Days / 5 Nights',
        price: 218,
        image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2071&auto=format&fit=crop',
        rating: 4.8,
        features: ['Borobudur Visit', 'Bromo Sunrise', 'Local Cuisine', 'Guided Tours'],
    },
    {
        id: 'pkg-solo',
        title: 'Solo Tour Package',
        destination: 'Solo, Central Java',
        duration: '4 Days / 3 Nights',
        price: 163,
        image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=2070&auto=format&fit=crop',
        rating: 4.7,
        features: ['Batik Workshop', 'Palace Tour', 'Traditional Markets', 'Culinary Tour'],
    },
    {
        id: 'pkg-raja-ampat',
        title: 'Raja Ampat Package',
        destination: 'Raja Ampat, Papua',
        duration: '7 Days / 6 Nights',
        price: 450,
        image: 'https://images.unsplash.com/photo-1570789210967-2cac24ba04c0?q=80&w=2070&auto=format&fit=crop',
        rating: 5.0,
        features: ['Diving & Snorkeling', 'Island Hopping', 'Kayaking', 'Marine Life Tour'],
    },
    {
        id: 'pkg-komodo',
        title: 'Komodo Tour Package',
        destination: 'Labuan Bajo, NTT',
        duration: '5 Days / 4 Nights',
        price: 380,
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=2074&auto=format&fit=crop',
        rating: 4.8,
        features: ['Komodo Dragons', 'Pink Beach', 'Snorkeling', 'Sunset Cruise'],
    },
    {
        id: 'pkg-lombok',
        title: 'Lombok Tour Package',
        destination: 'Lombok, NTB',
        duration: '5 Days / 4 Nights',
        price: 245,
        image: 'https://images.unsplash.com/photo-1571366343168-631c5bcca7a4?q=80&w=2070&auto=format&fit=crop',
        rating: 4.7,
        features: ['Gili Islands', 'Rinjani Trekking', 'Surfing', 'Sasak Village'],
    },
];
