'use client';

import { LucideCalendar, LucideWallet, LucideUser, LucideChevronDown } from 'lucide-react';

export const SearchPanel = () => {
    return (
        <div className="search-panel">
            <div className="search-filter">
                <LucideCalendar size={18} className="search-filter-icon" />
                <span className="search-filter-label">Date</span>
                <LucideChevronDown size={14} className="search-filter-chevron" />
            </div>

            <div className="search-divider" />

            <div className="search-filter">
                <LucideWallet size={18} className="search-filter-icon" />
                <span className="search-filter-label">Budget</span>
                <LucideChevronDown size={14} className="search-filter-chevron" />
            </div>

            <div className="search-divider" />

            <div className="search-filter">
                <LucideUser size={18} className="search-filter-icon" />
                <span className="search-filter-label">Guest</span>
                <LucideChevronDown size={14} className="search-filter-chevron" />
            </div>

            <button className="search-btn">Search</button>
        </div>
    );
};
