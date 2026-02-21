import { useLanguage } from '@/context/LanguageContext';

interface HeroProps {
    children?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ children }) => {
    const { t } = useLanguage();

    return (
        <section className="hero">
            <div className="hero-bg">
                <img
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
                    alt="Indonesian landscape"
                />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <h1 className="hero-title">
                    {t.hero.title}
                </h1>
                <p className="hero-subtitle">
                    {t.hero.subtitle}
                </p>

                {children}
            </div>

            <div className="stats-section">
                <div className="stats-grid">
                    {[
                        { value: '10M+', label: t.hero.stats.customers },
                        { value: '09+', label: t.hero.stats.experience },
                        { value: '12K', label: t.hero.stats.destinations },
                        { value: '5.0', label: t.hero.stats.rating }
                    ].map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
