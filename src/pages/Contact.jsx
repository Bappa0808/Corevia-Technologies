import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import SectionWrapper from '../components/ui/SectionWrapper';
import Card from '../components/ui/Card';
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
                <title>Contact Us | Corevia Technologies</title>
                <meta name="description" content="Get in touch with Corevia Technologies for your next web development project. We're here to help you grow your business." />
            </Helmet>

            <section className="bg-slate-900 text-white py-20 text-center">
                <SectionWrapper>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? We'd love to hear from you.
                    </p>
                </SectionWrapper>
            </section>

            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
                            <p className="text-slate-600 mb-8">
                                Fill out the form or reach out to us directly through any of these channels. We respond to all inquiries within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <Card className="flex items-center p-6 space-x-4 border-l-4 border-l-secondary">
                                <div className="p-3 bg-blue-50 text-secondary rounded-full">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">Email Us</p>
                                    <p className="text-lg font-bold text-slate-900">hello@coreviatech.com</p>
                                </div>
                            </Card>

                            <Card className="flex items-center p-6 space-x-4 border-l-4 border-l-secondary">
                                <div className="p-3 bg-blue-50 text-secondary rounded-full">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">Call Us</p>
                                    <p className="text-lg font-bold text-slate-900">+91 98765 43210</p>
                                </div>
                            </Card>

                            <Card className="flex items-center p-6 space-x-4 border-l-4 border-l-secondary">
                                <div className="p-3 bg-blue-50 text-secondary rounded-full">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">Visit Us</p>
                                    <p className="text-lg font-bold text-slate-900">Kolkata, West Bengal, India</p>
                                </div>
                            </Card>
                        </div>

                        <div className="h-64 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                            {/* Placeholder for Google Map */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235850.6401089838!2d88.18254116744827!3d22.535406374492723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1709405200000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card className="p-8 lg:p-10">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                        placeholder="+91 98765 00000"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <Button type="submit" variant="primary" className="w-full py-4 text-lg" disabled={loading}>
                                {loading ? <span className="flex items-center"><Loader2 className="animate-spin mr-2" /> Sending...</span> : <span className="flex items-center">Send Message <Send className="ml-2" size={18} /></span>}
                            </Button>

                            {submitted && (
                                <div className="p-4 bg-green-50 text-green-700 rounded-lg text-center font-medium">
                                    Thank you! Your message has been sent successfully.
                                </div>
                            )}
                        </form>
                    </Card>
                </div>
            </SectionWrapper>
        </>
    );
};

export default Contact;
