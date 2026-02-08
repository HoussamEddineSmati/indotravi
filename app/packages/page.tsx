import type { Metadata } from 'next';
import { LucideStar } from 'lucide-react';
import { TOUR_PACKAGES } from '@/data/packages';

export const metadata: Metadata = {
    title: 'Tour Packages - INDOTRAVI',
    description: 'Browse our exclusive Indonesian travel packages and deals.',
};

export default function PackagesPage() {
    return (
        <main>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-header-title">Tour Packages</h1>
                    <p className="page-header-desc">
                        Browse our complete collection of travel packages across Indonesia.
                    </p>
                </div>
            </div>

            <section className="tour-packages">
                <div className="container">
                    <div className="packages-grid">
                        {TOUR_PACKAGES.map((pkg) => {
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
                                        <p className="package-date">{pkg.duration}</p>
                                        <div className="package-card-bottom">
                                            <h3 className="package-title">{pkg.title}</h3>
                                            <span className="package-price">${pkg.price}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
