'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LucideMenu, LucideX } from 'lucide-react';

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Packages', href: '/packages' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Contact', href: '/contact' },
];

export const Navbar = () => {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="container">
                <Link href="/" className="navbar-logo">
                    INDOTRAVI
                </Link>

                <nav className="navbar-menu">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`navbar-link ${pathname === link.href ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="navbar-actions">
                    <div className="navbar-lang">
                        <span className="inactive">De</span>
                        <span className="active-lang">En</span>
                    </div>
                    <Link href="/login">
                        <button className="navbar-login">Login</button>
                    </Link>
                    <button
                        className="navbar-mobile-btn"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <LucideX size={20} /> : <LucideMenu size={20} />}
                    </button>
                </div>
            </div>

            {mobileOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'rgba(0,0,0,0.9)',
                    backdropFilter: 'blur(20px)',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    zIndex: 50,
                }}>
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="navbar-link"
                            onClick={() => setMobileOpen(false)}
                            style={{ display: 'block', padding: '0.75rem 1rem' }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};
