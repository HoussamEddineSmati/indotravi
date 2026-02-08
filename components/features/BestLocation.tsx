import Link from 'next/link';
import { POPULAR_DESTINATIONS } from '@/data/destinations';

export const BestLocation = () => {
    const featured = POPULAR_DESTINATIONS.slice(0, 2);

    return (
        <section className="best-location">
            <div className="container">
                <div className="best-location-header">
                    <div>
                        <p className="section-label">Best location</p>
                        <h2 className="section-title">Indonesian tourism</h2>
                    </div>
                    <p className="section-desc">
                        Extraordinary natural beauty, enjoy the rich culture,
                        and experience the friendliness of the local people.
                    </p>
                </div>

                <div className="best-location-grid">
                    {featured.map((dest) => (
                        <Link key={dest.id} href={`/destinations`}>
                            <div className="destination-card">
                                <img src={dest.image} alt={dest.name} />
                                <div className="destination-card-overlay" />
                                <div className="destination-card-content">
                                    <p className="destination-card-location">{dest.location}</p>
                                    <h3 className="destination-card-name">{dest.name}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
