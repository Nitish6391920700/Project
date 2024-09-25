import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Us</h1>

        {/* Vision Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Vision</h2>
          <p className="text-gray-700 text-lg">
            Our vision is to be the leading provider of solutions that empower businesses to grow, innovate, and succeed in a rapidly evolving global market.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Mission</h2>
          <p className="text-gray-700 text-lg">
            Our mission is to deliver innovative products and services that add value to our clients and create a positive impact on the communities we serve.
          </p>
        </section>

        {/* Core Values Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Core Values</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            <li>Integrity: We uphold the highest standards of integrity in all of our actions.</li>
            <li>Innovation: We encourage creativity and the pursuit of excellence.</li>
            <li>Customer Focus: Our customers are at the heart of everything we do.</li>
            <li>Collaboration: We believe in the power of teamwork and collaboration.</li>
            <li>Accountability: We take responsibility for delivering on our commitments.</li>
          </ul>
        </section>

        {/* Goals Section */}
        <section>
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Goals</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            <li>To continuously innovate and improve our offerings.</li>
            <li>To expand our market reach and grow sustainably.</li>
            <li>To foster long-term relationships with our clients and partners.</li>
            <li>To promote a culture of inclusivity, learning, and personal growth.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
