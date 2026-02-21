'use client';

import React from 'react';

interface BudgetDropdownProps {
    value: string;
    onChange: (value: string) => void;
    onClose: () => void;
}

import { useLanguage } from '@/context/LanguageContext';

export const BudgetDropdown: React.FC<BudgetDropdownProps> = ({ value, onChange, onClose }) => {
    const { t } = useLanguage();
    const ranges = [
        '1000 - 2000',
        '2000 - 3000',
        '3000 - 4000',
        '4000 - 5000',
        '5000+',
    ];

    return (
        <div className="search-dropdown budget-dropdown" onClick={(e) => e.stopPropagation()}>
            <div className="dropdown-header">
                <h3>{t.search.budget_range}</h3>
                <p>{t.search.budget_desc}</p>
            </div>

            <div className="budget-list">
                {ranges.map((range) => (
                    <div
                        key={range}
                        className={`budget-item ${value === range ? 'active' : ''}`}
                        onClick={() => {
                            onChange(range);
                            onClose();
                        }}
                    >
                        <span>${range}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
