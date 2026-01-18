import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github } from 'lucide-react';
import SectionWrapper from '../components/ui/SectionWrapper';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Projects = () => {
    const projects = [
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
                <title>Our Projects | Corevia Technologies</title>
                <meta name="description" content="Check out our portfolio of successful projects including e-commerce sites, web applications, and custom software solutions." />
            </Helmet>

            <section className="bg-slate-900 text-white py-20 text-center">
                <SectionWrapper>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        A selection of projects that demonstrate our expertise and commitment to quality.
                    </p>
                </SectionWrapper>
            </section>

            <SectionWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="overflow-hidden group flex flex-col h-full hover:shadow-2xl transition-all duration-300 border-none ring-1 ring-slate-100">
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                    <a href={project.demoLink} className="p-3 bg-white text-slate-900 rounded-full hover:bg-secondary hover:text-white transition-colors" title="View Demo">
                                        <ExternalLink size={24} />
                                    </a>
                                    <a href={project.repoLink} className="p-3 bg-white text-slate-900 rounded-full hover:bg-secondary hover:text-white transition-colors" title="View Code">
                                        <Github size={24} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                                <p className="text-slate-600 mb-6 flex-grow">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Button variant="outline" className="w-full">View Case Study</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>
        </>
    );
};

export default Projects;
