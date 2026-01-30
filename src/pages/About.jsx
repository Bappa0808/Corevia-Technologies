import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Lightbulb } from 'lucide-react';
import SectionWrapper from '../components/ui/SectionWrapper';

const About = () => {
    const team = [
        {
            name: 'Bappa Bera',
            role: 'Lead Developer',
            bio: 'Expert in full-stack architectural systems, specializing in scalable web infrastructure.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80'
        },
        {
            name: 'Ankit Singh',
            role: 'Strategic Director',
            bio: 'Driving business growth through calculated digital transformation strategies.',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80'
        }
    ];

    return (
        <>
            <Helmet>
                <title>About Us | Corevia Technologies</title>
                <meta name="description" content="Corevia Technologies - Building digital permanence." />
            </Helmet>

            {/* Header */}
            <section className="bg-primary text-white py-32">
                <SectionWrapper>
                    <div className="max-w-4xl">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Our Story</span>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">Driving Innovation <br /> Since 2024</h1>
                        <p className="text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
                            Corevia Technologies is not just a digital agency; we are your partners in building a lasting digital legacy.
                        </p>
                    </div>
                </SectionWrapper>
            </section>

            {/* Mission & Vision */}
            <SectionWrapper className="py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <div className="flex items-start space-x-6">
                            <div className="p-4 border border-secondary/30 text-secondary rounded-none">
                                <Target size={32} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-primary mb-4">Our Mission</h2>
                                <p className="text-appText-body text-lg font-light leading-relaxed">
                                    To empower businesses with cutting-edge technology solutions that are scalable, secure, and user-centric. We believe in building digital products that stand as pillars of your success.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="flex items-start space-x-6">
                            <div className="p-4 border border-secondary/30 text-secondary rounded-none">
                                <Lightbulb size={32} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-primary mb-4">Our Vision</h2>
                                <p className="text-appText-body text-lg font-light leading-relaxed">
                                    To be the global benchmark in digital infrastructure, recognized for our commitment to precision, innovation, and unwavering quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Team Section */}
            <section className="bg-background-alt py-24">
                <SectionWrapper>
                    <div className="text-center mb-20">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">Leadership</span>
                        <h2 className="text-4xl font-serif font-bold text-primary mb-6">Meet The Team</h2>
                        <div className="w-16 h-1 bg-secondary mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {team.map((member, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 h-32 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl font-serif font-bold text-primary mb-1">{member.name}</h3>
                                    <p className="text-secondary text-xs uppercase tracking-widest font-bold mb-4">{member.role}</p>
                                    <p className="text-appText-body text-sm font-light leading-relaxed">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionWrapper>
            </section>
        </>
    );
};

export default About;
