import React from 'react';

const ContactUsPage = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
                <form>
                    <label className="block mb-2">Your Name</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />

                    <label className="block mt-4 mb-2">Your Email</label>
                    <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />

                    <label className="block mt-4 mb-2">Your Message</label>
                    <textarea className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"></textarea>

                    <button type="submit" className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                        Send Message
                    </button>
                </form>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">School Contact Information</h2>
                <p>Humber College</p>
                <p>Phone: +123-456-7890</p>
                <p>Email: info@school.example.com</p>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
                <ul className="flex">
                    <li className="mr-4">
                        <a href="#" className="text-blue-500 hover:underline">Facebook</a>
                    </li>
                    <li className="mr-4">
                        <a href="#" className="text-blue-500 hover:underline">Twitter</a>
                    </li>
                    <li>
                        <a href="#" className="text-blue-500 hover:underline">Instagram</a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default ContactUsPage;
