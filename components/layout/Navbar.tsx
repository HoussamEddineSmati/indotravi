'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LucideMenu, LucideX } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Navbar = () => {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const { locale, setLocale, t } = useLanguage();

    const NAV_LINKS = [
        { label: t.nav.home, href: '/' },
        { label: t.nav.about, href: '/about' },
        { label: t.nav.packages, href: '/packages' },
        { label: t.nav.destinations, href: '/destinations' },
        { label: t.nav.contact, href: '/contact' },
    ];

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
                        <span
                            className={locale === 'ar' ? 'active-lang' : 'inactive'}
                            onClick={() => setLocale('ar')}
                            style={{ cursor: 'pointer' }}
                        >
                            Ar
                        </span>
                        <span
                            className={locale === 'en' ? 'active-lang' : 'inactive'}
                            onClick={() => setLocale('en')}
                            style={{ cursor: 'pointer' }}
                        >
                            En
                        </span>
                    </div>
                    <Link href="/login">
                        <button className="navbar-login">{t.common.login}</button>
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
