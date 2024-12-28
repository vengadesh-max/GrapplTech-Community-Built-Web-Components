"use client"
import React, { useState } from 'react';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const questions = [
    {
      question: "What is GrapplTech?",
      answer: "GrapplTech is a platform that connects aspiring tech professionals with top bootcamps and industry mentors, providing opportunities for learning and growth."
    },
    {
      question: "How can I apply for a bootcamp?",
      answer: "You can apply for a bootcamp through our platform by creating an account, browsing available bootcamps, and submitting your application directly through the site."
    },
    {
      question: "Do I need to pay to use GrapplTech ? ",
      answer: "Yes, you have to pay as little as possible for our training programs, which are designed to enhance your skills and prepare you for your dream careers. However, access to some of our bootcamp listings is provided to you for free. We believe in making valuable opportunities accessible, and that's why we offer affordable training options to help you excel in your career journey."
    },
    {
      question: "Do I get placement support for bootcamp? ",
      answer: "Yes, at GrapplTech, we offer perfect placement guidance."
    },
    {
      question: "Who are the clients at GrapplTech?",
      answer: "Our clients at GrapplTech include a diverse range of stakeholders, from young startups to local businesses looking to enhance their online presence. Our client base consists of individuals and organizations seeking various services such as web development, landing page creation, web application development, app maintenance, and more. We partner with them to meet their specific requirements, helping them grow and succeed in the digital landscape."
    },
    {
      question: "Can I get career advice and guidance on GrapplTech?",
      answer: "Yes, GrapplTech offers career advice and resources to help you with resume building, interview preparation, and career development."
    },
    {
      question: "Is GrapplTech available globally?",
      answer: "Yes, GrapplTech is available to students and companies worldwide. You can access our platform from anywhere to find bootcamps or career opportunities."
    },
    {
      question: "How can I contact GrapplTech support?",
      answer: "You can reach out to our support team by visiting the Contact Us page on our website. We'll be happy to assist you with any questions or issues you may have."
    },
    {
      question: "Do you offer bootcamps in specific industries?",
      answer: "Yes, GrapplTech provides bootcamps in various industries. You can explore bootcamp in your preferred domain on our platform."
    },
    {
      question: "Can I apply to multiple bootcamps at once?",
      answer: "Yes, you can apply to multiple bootcamps on GrapplTech. Simply browse the listings, review the requirements, and submit applications to the bootcamps that interest you."
    },
    {
      question: "During the bootcamp, do you allow grapplers to work on real client projects?",
      answer: "Yes, at GrapplTech, we provide our grapplers with valuable hands-on experience. Grapplers have the opportunity to work on real client projects right from the inception. This practical exposure allows grapplers to collaborate with our clients, contribute to project development from scratch, and gain insights into real-world challenges and solutions. We believe in offering a dynamic learning environment that prepares grapplers for their future careers."
    }
  ];

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold text-blue-700 text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div 
              className="cursor-pointer flex justify-between items-center"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-xl font-bold">{item.question}</h3>
              <span className="text-blue-500">{expandedIndex === index ? '-' : '+'}</span>
            </div>
            {expandedIndex === index && (
              <p className="mt-2 text-gray-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
