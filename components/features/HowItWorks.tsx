import { LucideSearch, LucideTicket, LucideCreditCard, LucideCompass } from 'lucide-react';

const STEPS = [
    {
        icon: LucideSearch,
        title: 'Find your destination',
        desc: 'Embark on a journey to discover your dream destination, where adventure and relaxation await.',
    },
    {
        icon: LucideTicket,
        title: 'Book a ticket',
        desc: 'Secure your spot in paradise by booking tickets for your preferred tour or travel package.',
    },
    {
        icon: LucideCreditCard,
        title: 'Make payment',
        desc: 'We offer a variety of payment options to make the booking process convenient and hassle-free.',
    },
    {
        icon: LucideCompass,
        title: 'Explore destination',
        desc: 'Start the adventure and explore the outstanding beauty of nature and culture, creating unforgettable memories.',
    },
];

export const HowItWorks = () => {
    return (
        <section className="how-it-works">
            <div className="container">
                <div className="how-it-works-grid">
                    <div className="how-it-works-image">
                        <img
                            src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop"
                            alt="Traveler exploring"
                        />
                    </div>

                    <div>
                        <p className="section-label">How it works</p>
                        <h2 className="section-title" style={{ marginBottom: '2rem' }}>
                            One click for you
                        </h2>

                        <div className="how-it-works-steps">
                            {STEPS.map((step, index) => (
                                <div key={index} className="step-item">
                                    <div className="step-icon">
                                        <step.icon size={18} />
                                    </div>
                                    <div>
                                        <h4 className="step-title">{step.title}</h4>
                                        <p className="step-desc">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
