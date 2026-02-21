'use client';

import React from 'react';
import { LucideMinus, LucidePlus } from 'lucide-react';

interface GuestDropdownProps {
    value: number;
    onChange: (value: number) => void;
    onClose: () => void;
}

import { useLanguage } from '@/context/LanguageContext';

export const GuestDropdown: React.FC<GuestDropdownProps> = ({ value, onChange, onClose }) => {
    const { t } = useLanguage();
    const handleIncrement = (e: React.MouseEvent) => {
        e.stopPropagation();
        onChange(value + 1);
    };

    const handleDecrement = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (value > 1) onChange(value - 1);
    };

    return (
        <div className="search-dropdown guest-dropdown" onClick={(e) => e.stopPropagation()}>
            <div className="dropdown-header">
                <h3>{t.search.num_guests}</h3>
                <p>{t.search.guests_desc}</p>
            </div>

            <div className="guest-selector">
                <button
                    className={`selector-btn ${value <= 1 ? 'disabled' : ''}`}
                    onClick={handleDecrement}
                    disabled={value <= 1}
                >
                    <LucideMinus size={16} />
                </button>
                <span className="guest-count">{value}</span>
                <button
                    className="selector-btn"
                    onClick={handleIncrement}
                >
                    <LucidePlus size={16} />
                </button>
            </div>

            <div className="dropdown-footer">
                <button className="apply-btn" onClick={onClose}>{t.search.apply}</button>
            </div>
        </div>
    );
};
