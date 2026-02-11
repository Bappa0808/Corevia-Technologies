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
            title: 'Property Website Development',
            description: 'Custom real estate websites with advanced property listings, search filters, virtual tours, and lead capture systems.'
        },
        {
            icon: Layout,
            title: 'Agent Landing Pages',
            description: 'High-converting landing pages designed specifically for real estate agents to showcase properties and capture client inquiries.'
        },
        {
            icon: Lock,
            title: 'Secure Client Portals',
            description: 'Protected authentication systems for property management platforms with client access, document sharing, and communication tools.'
        },
        {
            icon: BarChart,
            title: 'Real Estate Dashboards',
            description: 'Comprehensive property management dashboards with analytics, market insights, listing management, and performance tracking.'
        },
        {
            icon: ShoppingBag,
            title: 'Corporate Real Estate Solutions',
            description: 'Enterprise-grade platforms for real estate firms, property developers, and agencies to manage portfolios and global operations.'
        },
        {
            icon: Code,
            title: 'Agent Portfolio Sites',
            description: 'Professional portfolio websites for real estate agents to showcase sold properties, testimonials, and establish credibility.'
        },
        {
            icon: Search,
            title: 'SEO for Real Estate',
            description: 'Specialized SEO strategies for real estate businesses to rank for local and international property searches and attract qualified buyers.'
        },
        {
            icon: Wrench,
            title: 'Website Maintenance',
            description: 'Dedicated support and maintenance for your real estate website, ensuring listings stay updated and the platform runs smoothly.'
        }
    ];

    return (
        <>
            <Helmet>
                <title>Our Services | EstateWebly</title>
                <meta name="description" content="Explore our comprehensive real estate digital solutions including property websites, agent portals, CRM systems, and global market expansion tools." />
            </Helmet>

            {/* Hero */}
            <section className="bg-gradient-to-br from-primary via-primary to-[#152d47] text-white py-32 text-center">
                <SectionWrapper>
                    <span className="text-[#f4b942] font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">Our Expertise</span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-white drop-shadow-lg">Real Estate Solutions</h1>
                    <p className="text-xl text-slate-100 font-light max-w-2xl mx-auto leading-relaxed">
                        We deliver world-class digital solutions designed specifically for the global real estate market.
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
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Need a Custom Real Estate Solution?</h2>
                        <p className="text-slate-300 mb-10 text-lg font-light leading-relaxed">
                            We understand that every real estate business is unique. Contact us to discuss your specific requirements and get a tailored solution.
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
