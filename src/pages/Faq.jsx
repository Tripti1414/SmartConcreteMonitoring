import react, { useState } from 'react';
import "./Faq.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const faqs=[
    {
        question:
        "What is Smart Concrete Monitoring?",
        answer:
        "Smart Concrete Monitoring is an advanced system that uses IoT sensors to monitor the health and integrity of concrete structures in real-time."
    },
    {
        question:
        "how can i access my reports",
        answer:
        "You can access your reports by logging into your account and navigating to the 'Reports' section from the dashboard and download it."
    },
    {
        question:
        "What types of sensors are used in the system?",
        answer:
        "The system utilizes various sensors including humidity sensors, temperature sensors, and strain gauges to monitor different aspects of concrete health."
    },
    {
        question:
        "How often is the data updated?",
        answer:
        "Data is typically updated every 15 minutes, but this can be adjusted based on user preferences and the specific requirements of the project."  
    },
    {
        question:
        "How do i contact support? ",
        answer:
        "You can contact our support team via the 'Contact Us' page on our website or by emailing"
        
    }
]
function Faq() {
    const [openIndex, setOpenIndex] = useState(null);
     const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container"> 
        <h2>Frequently Asked Questions (FAQ)</h2>
        <div className="faq-list">
            {faqs.map((faq,index)=>(
                <div key={index} className={`faq-item ${openIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
>
                     <div className="faq-question">
              <span>{faq.question}</span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
            ))}
               </div>
               </div>
            )}

export default Faq;