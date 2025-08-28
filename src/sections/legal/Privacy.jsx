// import React from 'react'

// const Privacy = () => {
//   return (
//     <section id='privacy' className='flex w-full justify-center py-20 max-container'>
//         <div className=' w-full sm:w-[650px] padding-x'>
//             <h1 className='text-2xl sm:text-3xl font-bold text-postam-gray'>Privacy Policy</h1>
//             <p><span className='font-bold block mt-2'>1. Information We Collect</span>We collect the following types of information:</p>
//             <ul className="list-disc pl-5">
//                 <li>Personal Information: such as your name, email address, and phone number when you create an account.</li>
//                 <li>Payment Information: for transactions including bill payments and shopping.</li>
//                 <li>Usage Data: such as your activity within the app, features you use, and device type.</li>
//                 <li>Location Data: with your permission, to improve app functionality.</li>
//             </ul>

//             <p><span className='font-bold block mt-7'>2. How We Use Your Information</span>We use the information to:</p>
//             <ul className="list-disc pl-5">
//                 <li>Provide and improve app features (shopping, streaming, payments, etc.)</li>
//                 <li>Personalize your experience</li>
//                 <li>Process transactions securely</li>
//                 <li>Communicate with you about updates and promotions</li>
//                 <li>Analyze usage to improve performance</li>
//             </ul>

//             <p><span className='font-bold block mt-7'>3. Data Sharing</span>We do not sell your personal information. We only share data:</p>
//             <ul className="list-disc pl-5">
//                 <li>With service providers (e.g., payment gateways)</li>
//                 <li>When legally required (e.g., court orders)</li>
//                 <li>To protect Postam’s rights and users’ safety</li>
//             </ul>

//             <p><span className='font-bold block mt-7'>4. Data Security</span>We use encryption and best practices to protect your data. However, no system is 100% secure. Always use a strong password and keep your login credentials private.</p>

//             <p><span className='font-bold block mt-7'>5. Your Choices</span></p>
//             <ul className="list-disc pl-5">
//                 <li>You can update your profile and preferences anytime.</li>
//                 <li>You can delete your account by contacting support.</li>
//                 <li>You can manage app permissions through your device settings.</li>
//             </ul>

//             <p><span className='font-bold block mt-7'>6. Children's Privacy</span>Postam is not intended for users under 13. We do not knowingly collect data from children.</p>

//             <p><span className='font-bold block mt-7'>7. Changes to This Policy</span>We may update this Privacy Policy occasionally. We’ll notify you of significant changes via the app or email.</p>

//             <p><span className='font-bold block mt-7'>8. Contact Us</span>Have questions? Reach us at <a className='text-primary' href='mailto:support@postam.app'>support@postam.app</a></p>
          
//         </div>
        
//     </section>
//   )
// }

// export default Privacy

import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // optional icons

const Privacy = () => {
  const [headings, setHeadings] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll("#privacy h2, #privacy h3, #privacy span.font-bold");
    const items = Array.from(nodes).map((node) => {
      if (!node.id) {
        node.id = node.innerText.replace(/\s+/g, "-").toLowerCase();
      }
      return {
        id: node.id,
        text: node.innerText,
        level: node.tagName,
      };
    });
    setHeadings(items);
  }, []);

  return (
    <section id="privacy" className="flex flex-col md:flex-row w-full py-20 max-container">
      {/* --- MOBILE TOC --- */}
      <div className="md:hidden sticky top-0 z-20 bg-[#ece7fe] shadow-md">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-full flex justify-between items-center px-4 py-3 font-bold text-lg"
        >
          Table of Contents
          {menuOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {menuOpen && (
          <ul className="px-4 pb-4 space-y-2">
            {headings.map((h, i) => (
              <li key={i} className={`${h.level === "H3" ? "ml-4" : ""} first:hidden`}>
                <a
                  href={`#${h.id}`}
                  className="text-postam hover:text-primary"
                  onClick={() => setMenuOpen(false)} // close after clicking
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* --- DESKTOP TOC --- */}
      <aside className="hidden md:block md:w-1/4 sticky top-7 h-fit bg-[#ece7fe] p-4 rounded-lg">
        <h3 className="font-bold mb-3 text-lg">Table of Contents</h3>
        <ul className="space-y-2">
          {headings.map((h, i) => (
            <li key={i} className={`${h.level === "H3" ? "ml-4" : ""} first:hidden`}>
              <a href={`#${h.id}`} className="text-postam hover:text-primary">
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <div className="md:w-3/4 w-full sm:w-[650px] padding-x">
        <h1 className="text-2xl sm:text-3xl font-bold text-postam-gray mb-6 max-sm:mt-10">
          Privacy Policy
        </h1>

        <p>
          <span className="font-bold block mt-2">1. Information We Collect</span>
          We collect the following types of information:
        </p>
        <ul className="list-disc pl-5">
          <li>Personal Information: such as your name, email address, and phone number when you create an account.</li>
          <li>Payment Information: for transactions including bill payments and shopping.</li>
          <li>Usage Data: such as your activity within the app, features you use, and device type.</li>
          <li>Location Data: with your permission, to improve app functionality.</li>
        </ul>

        <p>
          <span className="font-bold block mt-7">2. How We Use Your Information</span>
          We use the information to:
        </p>
        <ul className="list-disc pl-5">
          <li>Provide and improve app features (shopping, streaming, payments, etc.)</li>
          <li>Personalize your experience</li>
          <li>Process transactions securely</li>
          <li>Communicate with you about updates and promotions</li>
          <li>Analyze usage to improve performance</li>
        </ul>

        <p>
          <span className="font-bold block mt-7">3. Data Sharing</span>
          We do not sell your personal information. We only share data:
        </p>
        <ul className="list-disc pl-5">
          <li>With service providers (e.g., payment gateways)</li>
          <li>When legally required (e.g., court orders)</li>
          <li>To protect Postam’s rights and users’ safety</li>
        </ul>

        <p className="mt-7">
          <span className="font-bold block">4. Data Security</span>
          We use encryption and best practices to protect your data. However, no system is 100% secure. Always use a strong password and keep your login credentials private.
        </p>

        <p className="mt-7">
          <span className="font-bold block">5. Your Choices</span>
        </p>
        <ul className="list-disc pl-5">
          <li>You can update your profile and preferences anytime.</li>
          <li>You can delete your account by contacting support.</li>
          <li>You can manage app permissions through your device settings.</li>
        </ul>

        <p className="mt-7">
          <span className="font-bold block">6. Children's Privacy</span>
          Postam is not intended for users under 13. We do not knowingly collect data from children.
        </p>

        <p className="mt-7">
          <span className="font-bold block">7. Changes to This Policy</span>
          We may update this Privacy Policy occasionally. We’ll notify you of significant changes via the app or email.
        </p>

        <p className="mt-7">
          <span className="font-bold block">8. Contact Us</span>
          Have questions? Reach us at{" "}
          <a className="text-primary" href="mailto:support@postam.app">
            support@postam.app
          </a>
        </p>
       
        <h1 className='text-2xl sm:text-3xl font-bold text-postam-gray mt-10'>Terms & Condition</h1>
        <p>Welcome to Postam! By using our app, you agree to the following terms. Please read them carefully.</p>
            <p><span className='font-bold block mt-2'>1. Overview</span>Postam is a unified platform that combines entertainment, shopping, bill payments, and community engagement. We aim to simplify your digital life.</p>

            <p><span className='font-bold block mt-7'>2. User Eligibility</span>You must be at least 13 years old to use Postam. By registering, you confirm that you meet this requirement.</p>
         
            <p><span className='font-bold block mt-7'>3. Account Responsibility</span>We do not sell your personal information. We only share data:</p>
            <ul className="list-disc pl-5">
                <li>Keep your login details secure.)</li>
                <li>You’re responsible for all activity under your account.</li>
                <li>Notify us immediately if you suspect unauthorized access</li>
            </ul>

                        <p><span className='font-bold block mt-7'>4. Acceptable Use</span>You agree not to:</p>
            <ul className="list-disc pl-5">
                <li>Use Postam for any illegal activities</li>
                <li>Impersonate others or misrepresent your identity</li>
                <li>Upload harmful or abusive content</li>
            </ul>

            <p><span className='font-bold block mt-7'>5. Payments & Transactions</span>All payments are processed via secure third-party gateways. Postam is not liable for failed transactions caused by user error or third-party services.</p>

            <p><span className='font-bold block mt-7'>6. Intellectual Property</span>All content, logos, and features on Postam are owned by Postam or its partners. You may not copy, distribute, or use any content without permission.</p>
            
            <p><span className='font-bold block mt-7'>7. Termination</span>We reserve the right to suspend or terminate your account if you violate these terms or misuse the app.</p>

            <p><span className='font-bold block mt-7'>8. Limitation of Liability</span>Postam is provided "as is." We are not liable for:</p>
                <ul className="list-disc pl-5">
                <li>App downtime</li>
                <li>Loss of data or profits</li>
                <li>Errors from third-party services</li>
            </ul>

            <p><span className='font-bold block mt-7'>9. Updates to Terms</span>We may revise these terms. Continued use of the app after changes means you accept the new terms.</p>


            <p><span className='font-bold block mt-7'>10. Contact Us</span>For support or legal questions, email <a className='text-primary' href='mailto:support@postam.app'>support@postam.app</a></p>
          
      </div>
    </section>
  );
};

export default Privacy;
