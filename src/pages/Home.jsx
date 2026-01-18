import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Globe, Smartphone, BarChart, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SectionWrapper from '../components/ui/SectionWrapper';
import { Link } from 'react-router-dom';

const Home = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>Corevia Technologies | Digital Business Solutions</title>
                <meta name="description" content="Corevia Technologies builds modern websites, web apps, and digital solutions for startups and businesses. Drive growth with our expert development services." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-900 text-white py-20 lg:py-32">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-3xl mx-auto"
                    >
                        <motion.div variants={fadeInUp} className="inline-block px-4 py-1 mb-6 rounded-full bg-secondary/20 text-secondary font-medium text-sm">
                            Innovate. Build. Grow.
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            Building Digital Solutions That Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Business Growth</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                            We transform ideas into powerful, high-performance websites and applications. Partner with Corevia Technologies to elevate your digital presence.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link to="/contact">
                                <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">Get a Free Consultation</Button>
                            </Link>
                            <Link to="/services">
                                <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4 border-slate-600 text-slate-300 hover:text-white hover:border-white">View Our Services</Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services Overview */}
            <SectionWrapper id="services">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Expertise</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Comprehensive web development services tailored to your business needs using modern technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Globe, title: 'Web Development', desc: 'Custom websites built with modern frameworks for speed and performance.' },
                        { icon: Smartphone, title: 'Responsive Design', desc: 'Interfaces that look beautiful and work perfectly on every device.' },
                        { icon: Database, title: 'Backend Systems', desc: 'Secure and scalable server-side solutions for complex applications.' },
                    ].map((service, index) => (
                        <Card key={index} className="flex flex-col items-center text-center p-8 hover:shadow-xl transition-shadow duration-300">
                            <div className="p-4 bg-blue-50 text-secondary rounded-full mb-6">
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600">{service.desc}</p>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/services">
                        <Button variant="ghost" className="text-secondary font-medium flex items-center">
                            Explore All Services <ArrowRight size={18} className="ml-2" />
                        </Button>
                    </Link>
                </div>
            </SectionWrapper>

            {/* Why Choose Us */}
            <section className="bg-slate-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Team Application"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Corevia?</h2>
                            <div className="space-y-6">
                                {[
                                    { title: 'Modern Tech Stack', desc: 'We use the latest technologies like React, Tailwind, and Node.js.' },
                                    { title: 'Performance First', desc: 'Lightning fast load times and optimized for SEO.' },
                                    { title: 'Client Centric', desc: 'We work closely with you to understand and achieve your goals.' },
                                    { title: 'Scalable Solutions', desc: 'Code that grows with your business.' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start">
                                        <CheckCircle className="text-emerald-500 mt-1 mr-4 shrink-0" size={24} />
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Banner */}
            <section className="py-12 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-slate-500 font-medium mb-8">POWERED BY MODERN TECHNOLOGIES</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Text placeholders for logos for now as per instructions to not use external dead links, 
                    but could use FontAwesome or similar if I had setup icons. 
                    Using text/icons for clarity. */}
                        <div className="flex items-center space-x-2"><Code size={24} /><span className="font-bold text-xl">React</span></div>
                        <div className="flex items-center space-x-2"><span className="font-bold text-xl">Vite</span></div>
                        <div className="flex items-center space-x-2"><span className="font-bold text-xl">TailwindCSS</span></div>
                        <div className="flex items-center space-x-2"><Database size={24} /><span className="font-bold text-xl">Node.js</span></div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary text-white py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
                    <p className="text-lg text-slate-300 mb-8">
                        Let's discuss how we can help your business grow with a professional web presence.
                    </p>
                    <Link to="/contact">
                        <Button variant="secondary" className="px-8 py-4 text-lg shadow-lg shadow-purple-900/20">
                            Get in Touch Today
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
