import type { Metadata } from 'next';
import { LucideHeart, LucideShield, LucideUsers, LucideGlobe } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About Us - INDOTRAVI',
    description: 'Learn about our mission to showcase the best of Indonesian tourism.',
};

const VALUES = [
    {
        icon: LucideHeart,
        title: 'Passion for Travel',
        desc: 'We are passionate about sharing the beauty of Indonesia with the world through carefully curated experiences.',
    },
    {
        icon: LucideShield,
        title: 'Trust & Safety',
        desc: 'Your safety is our priority. We partner only with verified and trusted local providers across Indonesia.',
    },
    {
        icon: LucideUsers,
        title: 'Local Expertise',
        desc: 'Our team of local guides and experts ensures authentic experiences that go beyond typical tourist attractions.',
    },
    {
        icon: LucideGlobe,
        title: 'Sustainable Tourism',
        desc: 'We are committed to preserving Indonesia\'s natural beauty and cultural heritage for future generations.',
    },
];

export default function AboutPage() {
    return (
        <main>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-header-title">About INDOTRAVI</h1>
                    <p className="page-header-desc">
                        Your trusted partner for exploring the extraordinary beauty of Indonesia.
                    </p>
                </div>
            </div>

            <section className="about-section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image">
                            <img
                                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop"
                                alt="Bali Temple"
                            />
                        </div>
                        <div>
                            <p className="section-label">Our Story</p>
                            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
                                Connecting travelers with Indonesia&apos;s hidden gems
                            </h2>
                            <p className="section-desc" style={{ maxWidth: '100%' }}>
                                Founded with a deep love for Indonesia&apos;s diverse landscapes and rich cultural
                                heritage, INDOTRAVI has been helping travelers discover the archipelago&apos;s
                                most breathtaking destinations since 2015. From the volcanic peaks of Java
                                to the pristine waters of Raja Ampat, we craft journeys that create lasting
                                memories.
                            </p>
                            <br />
                            <p className="section-desc" style={{ maxWidth: '100%' }}>
                                With over 9 years of experience and a network of trusted local partners,
                                we&apos;ve helped more than 10 million travelers experience the magic of Indonesia.
                                Our team of local experts ensures every trip is authentic, safe, and unforgettable.
                            </p>
                        </div>
                    </div>

                    <div className="about-values">
                        {VALUES.map((value, index) => (
                            <div key={index} className="value-card">
                                <div className="value-icon">
                                    <value.icon size={20} />
                                </div>
                                <h3 className="value-title">{value.title}</h3>
                                <p className="value-desc">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
