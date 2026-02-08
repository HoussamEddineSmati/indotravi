interface HeroProps {
    children?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ children }) => {
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
                    Extraordinary natural and cultural charm
                </h1>
                <p className="hero-subtitle">
                    Exploring Indonesia is an unforgettable adventure.
                </p>

                {children}
            </div>

            <div className="stats-section">
                <div className="stats-grid">
                    {[
                        { value: '10M+', label: 'Total Customers' },
                        { value: '09+', label: 'Years Of Experience' },
                        { value: '12K', label: 'Total Destinations' },
                        { value: '5.0', label: 'Average Rating' }
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
