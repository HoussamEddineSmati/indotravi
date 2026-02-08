import Link from 'next/link';
import { LucideStar } from 'lucide-react';
import { TOUR_PACKAGES } from '@/data/packages';

export const TourPackages = () => {
    const featured = TOUR_PACKAGES.slice(0, 3);

    return (
        <section className="tour-packages">
            <div className="container">
                <div className="tour-packages-header">
                    <div>
                        <p className="section-label">Tour packages</p>
                        <h2 className="section-title">Our tourist destination</h2>
                    </div>
                    <p className="section-desc">
                        Our tourist destinations offer an unrivaled blend of
                        natural beauty and cultural richness.
                    </p>
                </div>

                <div className="packages-grid">
                    {featured.map((pkg) => {
                        const days = pkg.duration.split('/')[0].trim();
                        return (
                            <div key={pkg.id} className="package-card">
                                <img src={pkg.image} alt={pkg.title} />
                                <div className="package-card-overlay" />
                                <div className="package-badge">{days}</div>
                                <div className="package-rating">
                                    <LucideStar size={12} style={{ fill: '#fbbf24', color: '#fbbf24' }} />
                                    {pkg.rating}
                                </div>
                                <div className="package-card-content">
                                    <p className="package-date">23 August - 29 August</p>
                                    <div className="package-card-bottom">
                                        <h3 className="package-title">{pkg.title}</h3>
                                        <span className="package-price">${pkg.price}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <Link href="/packages">
                        <button className="view-more-btn">View more</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
