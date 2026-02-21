'use client';

import React, { useState } from 'react';
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react';

interface DatePickerProps {
    startDate: Date | null;
    endDate: Date | null;
    onChange: (start: Date | null, end: Date | null) => void;
    onClose: () => void;
}

import { useLanguage } from '@/context/LanguageContext';

export const DatePicker: React.FC<DatePickerProps> = ({ startDate, endDate, onChange, onClose }) => {
    const { t, locale } = useLanguage();
    const [viewDate, setViewDate] = useState(new Date());

    const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const days = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month);

    const monthNamesEn = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const monthNamesAr = [
        "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
        "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
    ];

    const monthNames = locale === 'ar' ? monthNamesAr : monthNamesEn;

    const handleDateClick = (day: number) => {
        const selected = new Date(year, month, day);

        if (!startDate || (startDate && endDate)) {
            onChange(selected, null);
        } else if (selected < startDate) {
            onChange(selected, null);
        } else {
            onChange(startDate, selected);
        }
    };

    const isSelected = (day: number) => {
        const current = new Date(year, month, day);
        if (startDate && current.getTime() === startDate.getTime()) return true;
        if (endDate && current.getTime() === endDate.getTime()) return true;
        return false;
    };

    const isInRange = (day: number) => {
        if (!startDate || !endDate) return false;
        const current = new Date(year, month, day);
        return current > startDate && current < endDate;
    };

    const nextMonth = () => setViewDate(new Date(year, month + 1, 1));
    const prevMonth = () => setViewDate(new Date(year, month - 1, 1));

    return (
        <div className="search-dropdown date-picker" onClick={(e) => e.stopPropagation()}>
            <div className="calendar-header">
                <button onClick={prevMonth}><LucideChevronLeft size={18} /></button>
                <h3>{monthNames[month]} {year}</h3>
                <button onClick={nextMonth}><LucideChevronRight size={18} /></button>
            </div>

            <div className="calendar-grid">
                {locale === 'en' ? (
                    ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                        <div key={d} className="calendar-day-label">{d}</div>
                    ))
                ) : (
                    ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'].map(d => (
                        <div key={d} className="calendar-day-label">{d}</div>
                    ))
                )}
                {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} className="calendar-day empty"></div>
                ))}
                {Array.from({ length: days }).map((_, i) => {
                    const day = i + 1;
                    return (
                        <div
                            key={day}
                            className={`calendar-day ${isSelected(day) ? 'selected' : ''} ${isInRange(day) ? 'in-range' : ''}`}
                            onClick={() => handleDateClick(day)}
                        >
                            {day}
                        </div>
                    );
                })}
            </div>

            <div className="dropdown-footer">
                <button className="apply-btn" onClick={onClose}>{t.search.apply_range}</button>
            </div>
        </div>
    );
};
