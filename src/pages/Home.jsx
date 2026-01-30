import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Globe, Smartphone, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SectionWrapper from '../components/ui/SectionWrapper';
import { Link } from 'react-router-dom';

const Home = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>Corevia Technologies | Building the Future of Infrastructure</title>
                <meta name="description" content="Corevia Technologies - Premium development/infrastructure solutions. We build the future with excellence and innovation." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
                {/* Background Image with Parallax-like fixed feel (if supported) or strict cover */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop')" }}
                ></div>

                {/* Overlay - Gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.h2 variants={fadeInUp} className="text-secondary font-sans font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-6">
                            Constructing Excellence
                        </motion.h2>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
                            Building the <span className="italic font-light">Future</span> <br /> of Infrastructure
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
                            We deliver premium engineering and digital solutions that stand the test of time. Innovation meets permanence.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link to="/projects">
                                <Button className="px-10 py-4 bg-secondary text-white hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-widest text-xs font-bold shadow-lg">
                                    Our Projects
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button className="px-10 py-4 border border-white text-white hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-widest text-xs font-bold bg-transparent">
                                    Contact Us
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Decorative bottom fade */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background-default to-transparent z-20"></div>
            </section>

            {/* Services Overview */}
            <SectionWrapper id="services" className="bg-background-default py-24">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">What We Do</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Premium Services</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                    <p className="text-appText-body text-lg font-light leading-relaxed">
                        Comprehensive solutions tailored for high-growth enterprises.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                    {[
                        { icon: Globe, title: 'Web Development', desc: 'Custom enterprise platforms built for scale and security.' },
                        { icon: Smartphone, title: 'Digital Experience', desc: 'Seamless interfaces designed for the modern user.' },
                        { icon: Database, title: 'Infrastructure', desc: 'Robust backend systems driving your business logic.' },
                    ].map((service, index) => (
                        <Card key={index} className="group relative p-10 bg-white border border-slate-100 hover:border-secondary/30 hover:shadow-2xl transition-all duration-500 rounded-none">
                            <div className="absolute top-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            <div className="mb-8 text-primary group-hover:text-secondary transition-colors duration-300">
                                <service.icon size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
                            <p className="text-appText-body font-light leading-relaxed mb-6">{service.desc}</p>
                            <Link to="/services" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary group-hover:text-secondary transition-colors">
                                Read More <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            {/* Why Choose Us */}
            <section className="bg-background-alt py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-secondary/20"></div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-secondary/20"></div>
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Modern Office"
                                className="shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">Why Choose Us</span>
                            <h2 className="text-4xl font-serif font-bold text-primary mb-8">Engineering Success</h2>
                            <div className="space-y-8">
                                {[
                                    { title: 'Innovation', desc: 'Cutting-edge technologies for future-proof solutions.' },
                                    { title: 'Precision', desc: 'Pixel-perfect execution in every detail.' },
                                    { title: 'Integrity', desc: 'Transparent collaboration and delivery promises kept.' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start group">
                                        <div className="mt-1 mr-6 p-1 rounded-full border border-slate-300 group-hover:border-secondary transition-colors">
                                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-serif font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{item.title}</h3>
                                            <p className="text-appText-body font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">Ready to Build Your Vision?</h2>
                    <p className="text-lg text-slate-400 mb-12 font-light max-w-2xl mx-auto">
                        Partner with Corevia Technologies for world-class digital infrastructure.
                    </p>
                    <Link to="/contact">
                        <Button className="px-12 py-5 bg-secondary text-white hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-widest text-sm font-bold shadow-2xl">
                            Start Consultation
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
