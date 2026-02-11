import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | EstateWebly</title>
                <meta name="description" content="Get in touch with EstateWebly for your real estate digital transformation. We're here to help you grow your property business globally." />
            </Helmet>

            <section className="bg-primary text-white py-32 text-center">
                <SectionWrapper>
                    <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Get In Touch</span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">Start The Conversation</h1>
                    <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
                        Ready to transform your real estate business globally? We are here to listen and help you grow.
                    </p>
                </SectionWrapper>
            </section>

            <SectionWrapper className="py-24 bg-background-default">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Contact Information</h2>
                            <p className="text-appText-body text-lg font-light leading-relaxed mb-8">
                                Fill out the form or reach out to us directly. We value transparent partnerships with real estate businesses worldwide.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-6 group">
                                <div className="p-4 bg-primary text-white group-hover:bg-secondary transition-colors duration-300">
                                    <Mail size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-xs text-secondary font-bold uppercase tracking-widest mb-1">Email Us</p>
                                    <p className="text-xl font-serif font-bold text-primary">hello@estatewebly.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="p-4 bg-primary text-white group-hover:bg-secondary transition-colors duration-300">
                                    <Phone size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-xs text-secondary font-bold uppercase tracking-widest mb-1">Call Us</p>
                                    <p className="text-xl font-serif font-bold text-primary">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="p-4 bg-primary text-white group-hover:bg-secondary transition-colors duration-300">
                                    <MapPin size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-xs text-secondary font-bold uppercase tracking-widest mb-1">Visit Us</p>
                                    <p className="text-xl font-serif font-bold text-primary">Bangalore, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="h-64 bg-slate-100 border border-slate-200 shadow-inner">
                            {/* Placeholder for Map - styled to look crisp */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.888569830846!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709405200000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 lg:p-12 border border-slate-100 shadow-xl">
                        <h2 className="text-2xl font-serif font-bold text-primary mb-8">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border-b-2 border-slate-200 focus:border-secondary focus:bg-white outline-none transition-all placeholder:font-light"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border-b-2 border-slate-200 focus:border-secondary focus:bg-white outline-none transition-all placeholder:font-light"
                                        placeholder="+91 98765 00000"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border-b-2 border-slate-200 focus:border-secondary focus:bg-white outline-none transition-all placeholder:font-light"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border-b-2 border-slate-200 focus:border-secondary focus:bg-white outline-none transition-all resize-none placeholder:font-light"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <Button type="submit" variant="premium" className="w-full py-5 text-sm shadow-lg" disabled={loading}>
                                {loading ? <span className="flex items-center"><Loader2 className="animate-spin mr-2" /> Sending...</span> : <span className="flex items-center">Send Message <Send className="ml-2" size={18} /></span>}
                            </Button>

                            {submitted && (
                                <div className="p-4 bg-green-50 text-green-700 text-center font-medium border border-green-100">
                                    Thank you! Your message has been sent successfully.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
};

export default Contact;
