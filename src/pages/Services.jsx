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
            description: 'Full-stack web development tailored to your brand. We create fast, responsive, and SEO-friendly websites using the latest technologies like React and Vite.'
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
            title: 'Custom Business Websites',
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
            <section className="bg-slate-900 text-white py-20 text-center">
                <SectionWrapper>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        We deliver top-tier digital solutions tailored to your unique business requirements.
                    </p>
                </SectionWrapper>
            </section>

            {/* Services Grid */}
            <SectionWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="flex flex-col h-full hover:border-secondary/50 transition-colors duration-300">
                            <div className="p-3 bg-slate-50 w-fit rounded-lg text-secondary mb-6">
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 flex-grow leading-relaxed">
                                {service.description}
                            </p>
                        </Card>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-20 text-center bg-blue-50 rounded-2xl p-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Need a Custom Solution?</h2>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                        We understand that every business is unique. Contact us to discuss your specific requirements and get a tailored quote.
                    </p>
                    <Link to="/contact">
                        <Button variant="primary" className="px-8 py-4">Contact Us Now</Button>
                    </Link>
                </div>
            </SectionWrapper>
        </>
    );
};

export default Services;
