import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        enquiry: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        enquiry: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation
        let valid = true;
        const newErrors = { ...errors };

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        } else {
            newErrors.name = '';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
            valid = false;
        } else {
            newErrors.email = '';
        }

        if (!formData.enquiry.trim()) {
            newErrors.enquiry = 'Enquiry is required';
            valid = false;
        } else {
            newErrors.enquiry = '';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            valid = false;
        } else {
            newErrors.message = '';
        }

        setErrors(newErrors);

        if (valid) {
            // Send form data
            console.log('Form submitted:', formData);
            // Reset form
            setFormData({
                name: '',
                email: '',
                enquiry: '',
                message: ''
            });
        }
    };

    return (
        <div className="bg-white p-8 sm:p-10 md:p-12 lg:p-14 xl:p-16 rounded-md shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`mt-1 p-3 w-full border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`mt-1 p-3 w-full border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div className="mb-6">
                    <label htmlFor="enquiry" className="block text-sm font-medium text-gray-700">General Enquiry</label>
                    <input
                        type="text"
                        id="enquiry"
                        name="enquiry"
                        value={formData.enquiry}
                        onChange={handleChange}
                        className={`mt-1 p-3 w-full border rounded-md ${errors.enquiry ? 'border-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'}`}
                    />
                    {errors.enquiry && <p className="text-red-500 text-sm mt-1">{errors.enquiry}</p>}
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className={`mt-1 p-3 w-full border rounded-md ${errors.message ? 'border-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'}`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
