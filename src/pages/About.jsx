import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Trophy } from 'lucide-react';
import SectionWrapper from '../components/ui/SectionWrapper';
import Card from '../components/ui/Card';

const About = () => {
    const team = [
        {
            name: 'Bappa Bera',
            role: 'Lead Developer',
            bio: 'Expert in full-stack development, specializing in building scalable web applications and modern user interfaces.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80' // Placeholder
        },
        {
            name: 'Ankit Singh',
            role: 'Manager & Marketing',
            bio: 'Strategic thinker with a passion for digital marketing and business growth, ensuring client success.',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80' // Placeholder
        }
    ];

    return (
        <>
            <Helmet>
                <title>About Us | Corevia Technologies</title>
                <meta name="description" content="Learn about Corevia Technologies, our mission, vision, and the team driving digital innovation." />
            </Helmet>

            {/* Header */}
            <section className="bg-slate-900 text-white py-20">
                <SectionWrapper>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Driving Digital Innovation Since 2024</h1>
                        <p className="text-xl text-slate-300">
                            Corevia Technologies is a forward-thinking digital solutions agency dedicated to helping businesses thrive in the modern era.
                        </p>
                    </div>
                </SectionWrapper>
            </section>

            {/* Mission & Vision */}
            <SectionWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="p-3 bg-blue-100 text-primary rounded-lg">
                                <Target size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            To empower businesses with cutting-edge technology solutions that are scalable, secure, and user-centric. We believe in building digital products that not only look great but also drive real business results.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="p-3 bg-purple-100 text-secondary rounded-lg">
                                <Lightbulb size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            To be a global leader in digital transformation, recognized for our commitment to quality, innovation, and client success. We aim to bridge the gap between complex technology and business needs.
                        </p>
                    </div>
                </div>
            </SectionWrapper>

            {/* Team Section */}
            <section className="bg-slate-50 py-20">
                <SectionWrapper>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            The passionate minds behind Corevia Technologies.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {team.map((member, index) => (
                            <Card key={index} className="overflow-hidden flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 p-6">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 h-32 rounded-full object-cover border-4 border-slate-100 shadow-md"
                                />
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                                    <p className="text-secondary font-medium mb-3">{member.role}</p>
                                    <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </SectionWrapper>
            </section>
        </>
    );
};

export default About;
