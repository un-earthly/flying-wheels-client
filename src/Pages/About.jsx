import React from 'react';
import Navbar from '../SharedComponents/Navbar';
function AboutUs() {
    return (
        // <UserLayout>

        <div className="bg-gray-100">
            <Navbar bg="bg-black" />
            <div className="lg:max-w-[1280px] p-8 mx-auto">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <p className="text-gray-700 mb-4">
                    Welcome to Manufacturer's Bike Products, your go-to destination for high-quality bike parts and accessories. We are dedicated to providing top-notch products for biking enthusiasts and professionals.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                    Our mission is to deliver excellence in bike product manufacturing. We strive to meet the diverse needs of our customers by offering a wide range of innovative and durable products.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Why Choose Us?</h2>
                <ul className="list-disc list-inside text-gray-700 ml-4">
                    <li>Extensive Inventory: We offer a vast inventory of bike wheels, rims, and various bike parts to cater to your needs.</li>
                    <li>Quality Assurance: Our products are manufactured to the highest standards to ensure durability and performance.</li>
                    <li>Secure Payment: We prioritize your security, which is why we use Stripe for safe and seamless payment processing.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-4">Contact Us</h2>
                <p className="text-gray-700 mb-2">
                    Have questions or need assistance? Feel free to reach out to our support team. We are here to help you.
                </p>
                <p className="text-gray-700 mb-2">
                    Email: info@manufacturerbikes.com
                </p>
                <p className="text-gray-700">
                    Phone: +1 (123) 456-7890
                </p>
            </div>
        </div>
        // </UserLayout>
    );
}

export default AboutUs;
