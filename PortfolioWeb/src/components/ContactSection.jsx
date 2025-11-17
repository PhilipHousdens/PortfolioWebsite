import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react';

function ContactSection() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...'); 
        try {
            const res = await fetch('https://philiphportfoliowebsite.onrender.com/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success) {
                setStatus("Message sent successfully!");
                setFormData({ firstName: "", lastName: "", email: "", message: "" });
            } else {
                setStatus("Failed to send message.");
            }
        } catch (err) {
            console.error(err);
            setStatus("Error sending message.");
        }
  };
    return (
        <div className="isolate bg-black px-6 h-full py-24 md:py-10 ">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                style={{
                    clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"
                />
            </div>
            <div className="mx-auto max-w-2xl mt-15 text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Contact Me</h2>
            </div>
            <form action="#" onSubmit={handleSubmit} method="POST" className="mx-auto mt-10 max-w-xl sm:mt-10">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">
                        First name
                        </label>
                        <div className="mt-2.5">
                        <input
                            id="first-name"
                            name="firstName"
                            type="text"
                            autoComplete="given-name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                        />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white">
                        Last name
                        </label>
                        <div className="mt-2.5">
                        <input
                            id="last-name"
                            name="lastName"
                            type="text"
                            autoComplete="family-name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                        />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
                        Email
                        </label>
                        <div className="mt-2.5">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                        />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
                        Message
                        </label>
                        <div className="mt-2.5">
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                        />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                <button
                    type="submit"
                    className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                    Let's talk
                </button>

                {status && <p className="mt-4 text-center text-sm text-gray-300">{status}</p>}
                </div>
            </form>
        </div>
    );
}

export default ContactSection;