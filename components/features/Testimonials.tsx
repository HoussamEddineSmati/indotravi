import { LucideStar } from 'lucide-react';

export const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <p className="section-label">Testimonials</p>
                    <h2 className="section-title">What our travelers say</h2>
                </div>

                <div className="testimonial-card">
                    <div className="testimonial-author">
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                            alt="Donald Sullivan"
                            className="testimonial-avatar"
                        />
                        <div>
                            <div className="testimonial-name">Donald Sullivan</div>
                            <div className="testimonial-role">Founder Finto</div>
                        </div>
                    </div>

                    <p className="testimonial-text">
                        This travel website is very informative and easy to use. I like how they present
                        various destination options and travel packages with clear details. Offering
                        pictures and destination descriptions helps me decide where I want to visit.
                        Additionally, the ability to compare prices and reviews from other users is very
                        helpful in decision making.
                    </p>

                    <div className="testimonial-stars">
                        {[...Array(5)].map((_, i) => (
                            <LucideStar key={i} size={18} style={{ fill: '#fbbf24', color: '#fbbf24' }} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
