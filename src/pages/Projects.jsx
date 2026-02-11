import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github } from 'lucide-react';
import SectionWrapper from '../components/ui/SectionWrapper';

const Projects = () => {
    // Project data remains the same...
    const projects = [
        {
            title: 'Ayat Interior Work',
            description: 'Premium interior design website showcasing portfolio, services, and client testimonials with a modern aesthetic.',
            tags: ['React', 'Tailwind CSS', 'Framer Motion'],
            image: '/images/ayat-interior.png',
            demoLink: 'https://www.ayatinteriorwork.in/',
            repoLink: '#'
        },
        {
            title: 'E-Commerce Platform',
            description: 'A full-featured online store with cart functionality, payment gateway integration, and admin dashboard.',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
            demoLink: '#',
            repoLink: '#'
        },
        {
            title: 'Real Estate Portal',
            description: 'Property listing website with advanced search filters, map integration, and virtual tour capabilities.',
            tags: ['Next.js', 'Tailwind CSS', 'Supabase'],
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80',
            demoLink: '#',
            repoLink: '#'
        },
        {
            title: 'Healthcare Management System',
            description: 'Secure patient management system with appointment scheduling, teleconsultation, and medical records.',
            tags: ['React', 'Firebase', 'Material UI'],
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
            demoLink: '#',
            repoLink: '#'
        },
        {
            title: 'Corporate Dashboard',
            description: 'Analytics dashboard for enterprise clients showing real-time data visualization and reporting tools.',
            tags: ['Vue.js', 'D3.js', 'Express'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
            demoLink: '#',
            repoLink: '#'
        }
    ];

    return (
        <>
            <Helmet>
                <title>Our Projects | EstateWebly</title>
                <meta name="description" content="Explore our portfolio of successful real estate digital projects including property websites, agent portals, and real estate platforms." />
            </Helmet>

            {/* Header */}
            <section className="bg-gradient-to-br from-primary via-primary to-[#152d47] text-white py-32">
                <SectionWrapper>
                    <span className="text-[#f4b942] font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">Portfolio</span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-white drop-shadow-lg">Selected Works</h1>
                    <p className="text-xl text-slate-100 font-light max-w-2xl leading-relaxed">
                        A showcase of real estate digital transformations. We build platforms that connect properties to global markets.
                    </p>
                </SectionWrapper>
            </section>

            {/* Projects Array */}
            <section className="bg-background-default py-24">
                <SectionWrapper>
                    <div className="space-y-32">
                        {projects.map((project, index) => (
                            <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Image */}
                                <div className="w-full lg:w-3/5 group relative overflow-hidden shadow-2xl">
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500 z-10"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute bottom-0 left-0 bg-primary text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex gap-4">
                                        <a href={project.demoLink} className="hover:text-secondary"><ExternalLink /></a>
                                        <a href={project.repoLink} className="hover:text-secondary"><Github /></a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="w-full lg:w-2/5">
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-xs font-bold uppercase tracking-widest text-secondary border border-secondary/30 px-3 py-1">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold text-primary mb-6">{project.title}</h3>
                                    <p className="text-appText-body text-lg font-light leading-relaxed mb-8">
                                        {project.description}
                                    </p>
                                    <div className="h-px w-24 bg-secondary"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionWrapper>
            </section>
        </>
    );
};

export default Projects;
