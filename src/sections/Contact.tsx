"use client";
import { Card } from "@/components/Card";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { toast } from 'react-hot-toast';


export const ContactSection = () => {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch("https://formspree.io/f/mrbpywon", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
            toast.success("Message sent successfully!", {
                style: {
                    background: 'linear-gradient(to right, #f472b6, #fcd34d)',
                    color: '#1f2937',
                    fontWeight: 'semibold',
                    width: '500px',
                },
                icon: null
            });
        } else {
            toast.error("Oops! Something went wrong.", {
                style: {
                    background: '#555555',
                    color: '#fbfbfb',
                    fontWeight: 'semibold',
                    width: '500px',
                },
                icon: null
            });
        }
    };

    return (
        <div className="py-20 lg:py-28 text-white">
            <div className="container mx-auto">
                <SectionHeader
                    title="Let's work together!"
                    eyebrow="Contact"
                    description="I design and code beautifully simple things, and I love what I do. Just simple like that!"
                />
                <div className="mt-12 flex flex-col lg:flex-row gap-10">
                    {/* Contact Form */}
                    <Card className="w-full lg:w-2/3 p-8 shadow-lg relative">

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="text-md text-gray-300">First Name</label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="mt-2 p-3 rounded-lg bg-gray-900 text-white outline-none focus:ring-2 focus:ring-pink-400 w-full"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="text-md text-gray-300">Last Name</label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="mt-2 p-3 rounded-lg bg-gray-900 text-white outline-none focus:ring-2 focus:ring-pink-400 w-full"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="text-md text-gray-300">Email Address</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="mt-2 p-3 rounded-lg bg-gray-900 text-white outline-none focus:ring-2 focus:ring-pink-400 w-full"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="text-md text-gray-300">Phone Number</label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="mt-2 p-3 rounded-lg bg-gray-900 text-white outline-none focus:ring-2 focus:ring-pink-400 w-full"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="text-md text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="mt-2 p-3 rounded-lg bg-gray-900 text-white outline-none focus:ring-2 focus:ring-pink-400 w-full"
                                    rows={5}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="mt-4 py-3 px-6 bg-gradient-to-r from-pink-400 to-yellow-300 text-gray-900 text-lg font-extrabold rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-yellow-300 hover:to-pink-400"
                            >
                                Send Message
                            </button>
                        </form>
                    </Card>

                    {/* Contact Info */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-6 justify-center">
                        <div className="p-6 bg-gray-800 rounded-lg shadow-lg shadow-pink-400/20 flex items-center gap-4 hover:scale-105 transition-all duration-300 ease-in-out">
                            <FaPhoneAlt className="text-yellow-300 text-3xl animate-icon" />
                            <div>
                                <h4 className="text-lg font-semibold">Phone</h4>
                                <p className="text-gray-400">+94 75 183 8333</p>
                            </div>
                        </div>

                        <div className="p-6 bg-gray-800 rounded-lg shadow-lg shadow-yellow-300/20 flex items-center gap-4 hover:scale-105 transition-all duration-300 ease-in-out">
                            <FaEnvelope className="text-pink-400 text-3xl animate-icon" />
                            <div>
                                <h4 className="text-lg font-semibold">Email</h4>
                                <p className="text-gray-400">ayohansi17@gmail.com</p>
                            </div>
                        </div>

                        <div className="p-6 bg-gray-800 rounded-lg shadow-lg shadow-pink-400/20 flex items-center gap-4 hover:scale-105 transition-all duration-300 ease-in-out">
                            <FaMapMarkerAlt className="text-yellow-300 text-3xl animate-icon" />
                            <div>
                                <h4 className="text-lg font-semibold">Address</h4>
                                <p className="text-gray-400">Kadawatha, Western Province</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};
