import Link from 'next/link';
import { LucideFacebook, LucideTwitter, LucideInstagram, LucideMail, LucidePhone, LucideMapPin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <h3 className="footer-brand">INDOTRAVI</h3>
                        <p className="footer-desc">
                            Crafting unforgettable journeys across the Indonesian archipelago. Your adventure starts with us.
                        </p>
                        <div className="footer-social">
                            <a href="#" aria-label="Facebook"><LucideFacebook size={18} /></a>
                            <a href="#" aria-label="Twitter"><LucideTwitter size={18} /></a>
                            <a href="#" aria-label="Instagram"><LucideInstagram size={18} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-heading">Quick Links</h4>
                        <div className="footer-links">
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/packages">Packages</Link>
                            <Link href="/destinations">Destinations</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-heading">Top Destinations</h4>
                        <div className="footer-links">
                            <Link href="/destinations">Bali, Indonesia</Link>
                            <Link href="/destinations">Bromo, East Java</Link>
                            <Link href="/destinations">Raja Ampat, Papua</Link>
                            <Link href="/destinations">Komodo Island</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-heading">Contact Info</h4>
                        <div className="footer-contact-item">
                            <LucideMapPin size={16} />
                            <span>Jl. Sudirman No. 123,<br />Jakarta, Indonesia</span>
                        </div>
                        <div className="footer-contact-item">
                            <LucidePhone size={16} />
                            <span>+62 21 1234 5678</span>
                        </div>
                        <div className="footer-contact-item">
                            <LucideMail size={16} />
                            <span>hello@indotravi.com</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} INDOTRAVI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
