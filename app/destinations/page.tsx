import type { Metadata } from 'next';
import { LucideMapPin, LucideStar } from 'lucide-react';
import { POPULAR_DESTINATIONS } from '@/data/destinations';

export const metadata: Metadata = {
    title: 'Destinations - INDOTRAVI',
    description: 'Explore our curated list of top Indonesian travel destinations.',
};

export default function DestinationsPage() {
    return (
        <main>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-header-title">Explore Destinations</h1>
                    <p className="page-header-desc">
                        Discover the most breathtaking locations across the Indonesian archipelago.
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="destinations-grid">
                    {POPULAR_DESTINATIONS.map((dest) => (
                        <div key={dest.id} className="dest-page-card">
                            <div className="dest-page-card-img">
                                <img src={dest.image} alt={dest.name} />
                            </div>
                            <div className="dest-page-card-body">
                                <h3 className="dest-page-card-name">{dest.name}</h3>
                                <p className="dest-page-card-location">
                                    <LucideMapPin size={14} />
                                    {dest.location}
                                </p>
                                <p className="dest-page-card-desc">{dest.description}</p>
                                <div className="dest-page-card-footer">
                                    <div className="dest-page-price">
                                        ${dest.price} <span>/person</span>
                                    </div>
                                    <div className="dest-page-rating">
                                        <LucideStar size={14} style={{ fill: '#fbbf24', color: '#fbbf24' }} />
                                        {dest.rating}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
