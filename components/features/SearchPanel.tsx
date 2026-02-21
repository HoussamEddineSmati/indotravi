'use client';

import React, { useState, useRef, useEffect } from 'react';
import { LucideCalendar, LucideWallet, LucideUser, LucideChevronDown } from 'lucide-react';
import { DatePicker } from './DatePicker';
import { GuestDropdown } from './GuestDropdown';
import { BudgetDropdown } from './BudgetDropdown';
import { useLanguage } from '@/context/LanguageContext';

export const SearchPanel = () => {
    const { t } = useLanguage();
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [guests, setGuests] = useState(1);
    const [budget, setBudget] = useState('1000 - 2000');

    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const formatDate = (date: Date | null) => {
        if (!date) return null;
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    return (
        <div className="search-panel" ref={panelRef}>
            <div
                className={`search-filter ${openDropdown === 'date' ? 'active' : ''}`}
                onClick={() => toggleDropdown('date')}
            >
                <div className="search-filter-top">
                    <LucideCalendar size={14} className="search-filter-icon" />
                    <span className="search-filter-label">{t.search.date}</span>
                </div>
                <div className="search-filter-value">
                    {startDate ? (
                        <>
                            {formatDate(startDate)}
                            {endDate && ` - ${formatDate(endDate)}`}
                        </>
                    ) : (
                        t.search.select_date
                    )}
                    <LucideChevronDown size={14} className="search-filter-chevron" />
                </div>
                {openDropdown === 'date' && (
                    <DatePicker
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(start, end) => {
                            setStartDate(start);
                            setEndDate(end);
                        }}
                        onClose={() => setOpenDropdown(null)}
                    />
                )}
            </div>

            <div className="search-divider" />

            <div
                className={`search-filter ${openDropdown === 'budget' ? 'active' : ''}`}
                onClick={() => toggleDropdown('budget')}
            >
                <div className="search-filter-top">
                    <LucideWallet size={14} className="search-filter-icon" />
                    <span className="search-filter-label">{t.search.budget}</span>
                </div>
                <div className="search-filter-value">
                    ${budget}
                    <LucideChevronDown size={14} className="search-filter-chevron" />
                </div>
                {openDropdown === 'budget' && (
                    <BudgetDropdown
                        value={budget}
                        onChange={setBudget}
                        onClose={() => setOpenDropdown(null)}
                    />
                )}
            </div>

            <div className="search-divider" />

            <div
                className={`search-filter ${openDropdown === 'guest' ? 'active' : ''}`}
                onClick={() => toggleDropdown('guest')}
            >
                <div className="search-filter-top">
                    <LucideUser size={14} className="search-filter-icon" />
                    <span className="search-filter-label">{t.search.guest}</span>
                </div>
                <div className="search-filter-value">
                    {guests} {guests === 1 ? t.search.guest_label : t.search.guests_label}
                    <LucideChevronDown size={14} className="search-filter-chevron" />
                </div>
                {openDropdown === 'guest' && (
                    <GuestDropdown
                        value={guests}
                        onChange={setGuests}
                        onClose={() => setOpenDropdown(null)}
                    />
                )}
            </div>

            <button className="search-btn">{t.common.search}</button>
        </div>
    );
};


