import { notFound } from 'next/navigation';
import Link from 'next/link';
import { LucideMapPin, LucideStar, LucideArrowLeft } from 'lucide-react';
import { POPULAR_DESTINATIONS } from '@/data/destinations';

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { id } = await params;
    const dest = POPULAR_DESTINATIONS.find((d) => d.id === id);
    return {
        title: dest ? `${dest.name} - INDOTRAVI` : 'Destination Not Found',
        description: dest?.description || '',
    };
}

export default async function DestinationDetailsPage({ params }: PageProps) {
    const { id } = await params;
    const dest = POPULAR_DESTINATIONS.find((d) => d.id === id);

    if (!dest) return notFound();

    return (
        <main>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-header-title">{dest.name}</h1>
                    <p className="page-header-desc" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <LucideMapPin size={16} />
                        {dest.location}
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', height: '400px', marginBottom: '2rem' }}>
                        <img src={dest.image} alt={dest.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <LucideStar size={18} style={{ fill: '#fbbf24', color: '#fbbf24' }} />
                            <span style={{ fontWeight: 700, fontSize: '1.125rem' }}>{dest.rating}</span>
                            <span style={{ color: 'var(--color-gray-400)', fontSize: '0.875rem' }}>rating</span>
                        </div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                            ${dest.price} <span style={{ fontSize: '0.875rem', fontWeight: 400, color: 'var(--color-gray-400)' }}>/person</span>
                        </div>
                    </div>

                    <p style={{ color: 'var(--color-gray-600)', lineHeight: 1.8, fontSize: '1.0625rem', marginBottom: '2rem' }}>
                        {dest.description}
                    </p>

                    <Link href="/destinations" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gray-500)', fontSize: '0.9375rem', fontWeight: 500 }}>
                        <LucideArrowLeft size={16} />
                        Back to all destinations
                    </Link>
                </div>
            </section>
        </main>
    );
}
