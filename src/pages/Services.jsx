import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Layout, Lock, BarChart, ShoppingBag, Search, Wrench, Globe } from 'lucide-react';
import SectionWrapper from '../components/ui/SectionWrapper';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            icon: Globe,
            title: 'Website Development',
            description: 'Full-stack web development tailored to your brand. We create fast, responsive, and SEO-friendly websites using the latest technologies.'
        },
        {
            icon: Layout,
            title: 'Single Landing Pages',
            description: 'High-converting landing pages designed to capture leads and showcase your specific product or service effectively.'
        },
        {
            icon: Lock,
            title: 'Login & Auth Systems',
            description: 'Secure and robust authentication systems including multi-factor authentication, social logins, and role-based access control.'
        },
        {
            icon: BarChart,
            title: 'Professional Dashboards',
            description: 'Data-rich, interactive admin dashboards to manage your business operations, visualize data, and track performance metrics.'
        },
        {
            icon: ShoppingBag,
            title: 'Corporate Solutions',
            description: 'Tailored solutions for corporate entities, enhancing digital presence with professional design and functionality.'
        },
        {
            icon: Code,
            title: 'Portfolio Websites',
            description: 'Stunning portfolio sites for creatives and professionals to showcase their work and skills to the world.'
        },
        {
            icon: Search,
            title: 'SEO Optimization',
            description: 'Technical SEO services to improve your search engine rankings, drive organic traffic, and increase visibility.'
        },
        {
            icon: Wrench,
            title: 'Maintenance & Support',
            description: 'Ongoing website maintenance, updates, and technical support to keep your digital assets running smoothly and securely.'
        }
    ];

    return (
        <>
            <Helmet>
                <title>Our Services | Corevia Technologies</title>
                <meta name="description" content="Explore our wide range of web development services including custom websites, landing pages, SEO, and more." />
            </Helmet>

            {/* Hero */}
            <section className="bg-primary text-white py-32 text-center">
                <SectionWrapper>
                    <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Our Expertise</span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">Premium Services</h1>
                    <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
                        We deliver top-tier digital solutions tailored to your unique business requirements. Excellence is our standard.
                    </p>
                </SectionWrapper>
            </section>

            {/* Services Grid */}
            <SectionWrapper className="bg-background-default py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="flex flex-col h-full bg-white p-8 border border-slate-100 hover:border-secondary/30 hover:shadow-xl transition-all duration-300 rounded-none group">
                            <div className="mb-6 text-primary group-hover:text-secondary transition-colors duration-300">
                                <service.icon size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-primary mb-4 group-hover:translate-x-1 transition-transform">{service.title}</h3>
                            <p className="text-appText-body font-light leading-relaxed flex-grow">
                                {service.description}
                            </p>
                        </Card>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-24 text-center bg-primary text-white p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5">
                        <Code size={200} />
                    </div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Need a Custom Solution?</h2>
                        <p className="text-slate-300 mb-10 text-lg font-light leading-relaxed">
                            We understand that every business is unique. Contact us to discuss your specific requirements and get a tailored quote.
                        </p>
                        <Link to="/contact">
                            <Button className="px-10 py-4 bg-secondary text-white hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-widest text-xs font-bold shadow-lg">
                                Contact Us Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
};

export default Services;
