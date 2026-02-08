export interface Destination {
    id: string;
    name: string;
    location: string;
    region: string;
    image: string;
    price: number;
    rating: number;
    description: string;
}

export const POPULAR_DESTINATIONS: Destination[] = [
    {
        id: 'bromo',
        name: 'Bromo Tengger Tour',
        location: 'Bromo, East Java',
        region: 'East Java',
        image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2071&auto=format&fit=crop',
        price: 350,
        rating: 4.9,
        description: 'Witness the stunning sunrise over Mount Bromo, an active volcano surrounded by the vast Tengger caldera.',
    },
    {
        id: 'bali-beach',
        name: 'Bali Beach Tourism',
        location: 'Denpasar, Bali',
        region: 'Bali',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop',
        price: 285,
        rating: 4.8,
        description: 'Explore the pristine beaches, vibrant culture, and ancient temples of the Island of the Gods.',
    },
    {
        id: 'sumatra',
        name: 'Sumatra Tourism',
        location: 'Lampung, South Sumatra',
        region: 'Sumatra',
        image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=2070&auto=format&fit=crop',
        price: 320,
        rating: 4.7,
        description: 'Discover the wild beauty of Sumatra, from lush rainforests to stunning volcanic lakes.',
    },
    {
        id: 'borobudur',
        name: 'Borobudur Temple Tour',
        location: 'Yogyakarta, Central Java',
        region: 'Central Java',
        image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=2070&auto=format&fit=crop',
        price: 275,
        rating: 4.9,
        description: 'Visit the magnificent Borobudur Temple, the world\'s largest Buddhist temple and a UNESCO World Heritage site.',
    },
    {
        id: 'raja-ampat',
        name: 'Raja Ampat Paradise',
        location: 'Raja Ampat, West Papua',
        region: 'Papua',
        image: 'https://images.unsplash.com/photo-1570789210967-2cac24ba04c0?q=80&w=2070&auto=format&fit=crop',
        price: 450,
        rating: 5.0,
        description: 'Dive into crystal-clear waters and explore one of the most biodiverse marine habitats on the planet.',
    },
    {
        id: 'komodo',
        name: 'Komodo Island Adventure',
        location: 'Labuan Bajo, NTT',
        region: 'East Nusa Tenggara',
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=2074&auto=format&fit=crop',
        price: 380,
        rating: 4.8,
        description: 'Encounter the legendary Komodo dragons and explore the stunning pink beaches of Komodo National Park.',
    },
];
