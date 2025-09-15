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
          <a className="text-primary" href="mailto:getsupport@postam.com">
            support@getpostam.com
          </a>
        </p>
       
        <h1 id="terms" className='text-2xl sm:text-3xl font-bold text-postam-gray mt-10'>Terms & Condition</h1>
        <p className="mb-7"><strong>Effective Date:</strong> [Aug 28th, 2025]<br/>Welcome to Postam. By downloading, accessing, or using our mobile app (“the App”), you agree to comply with and be bound by these Terms & Conditions (“Terms”). Please read them carefully. If you do not agree, do not use the App.
</p>
            <p><span className='font-bold block mt-2'>1. Eligibility</span></p>
            <ul className="list-disc pl-5">
                <li>You must be at least 13 years old (or 18+ in jurisdictions that require it) to use Postam.</li>
                <li>By using Postam, you confirm you have the capacity to enter into this agreement.</li>
            </ul>

            <p><span className='font-bold block mt-7'>2. Our Services</span>Postam offers a unified platform for:</p>
              <ul className="list-disc pl-5">
                <li><strong>Content Monetization</strong> – Creators can earn based on their content’s views and engagement through Postam Creator Studio.</li>
                <li><strong>Entertainment & Streaming</strong> – Watch or share videos, including our 30-second video ad feature.</li>
                <li><strong>Marketplace & Classifieds</strong> – Post, browse, and discover products, jobs, adverts, and services.</li>
                <li><strong>Bill Payments</strong> – Pay for electricity, data, and other utilities securely within the app.</li>
                <li><strong>Community Engagement</strong> – Users can like, comment, and share posts to build meaningful </li>
              </ul> 
              <p>We may modify, update, or discontinue features at any time without liability.</p>
            
            <p><span className='font-bold block mt-7'>3. Account Registration</span></p>
              <ul className="list-disc pl-5">
                  <li>Users must create an account with accurate and up-to-date information.</li>
                  <li>You are responsible for maintaining confidentiality of your login credentials.</li>
                  <li>Any activity under your account is your responsibility.</li>
              </ul>

            <p><span className='font-bold block mt-7'>4. User Content</span></p>
              <ul className="list-disc pl-5">
                  <li>You retain ownership of the content you post.</li>
                  <li>By posting on Postam, you grant us a worldwide, non-exclusive, royalty-free license to display, distribute, and promote your content within the App.</li>
                  <li>You confirm you have the rights to any content you upload (text, images, audio, video, ads).</li>
              </ul>

            <p><span className='font-bold block mt-7'>5. Monetization & Payments</span></p>
              <ul className="list-disc pl-5">
                    <li>Creators may earn from their content based on engagement and views.</li>
                    <li>Buyers and sellers transact through integrated payment systems.</li>
                    <li>Postam may deduct transaction or service fees, which will be disclosed prior to payment.</li>
                    <li>Payouts are subject to verification and compliance checks.</li>
                    <li>You agree not to attempt to bypass or manipulate the payment systems.</li>

                </ul>

            <p><span className='font-bold block mt-7'>6. IProhibited Uses</span>You agree not to:</p>
               <ul className="list-disc pl-5">
                    <li>Post unlawful, offensive, fraudulent, or infringing content.</li>
                    <li>Sell prohibited or restricted items (e.g., weapons, counterfeit goods, illegal substances).</li>
                    <li>Use bots, automation, or deceptive practices to inflate views, likes, or engagement.</li>
                    <li>Harass, spam, or scam other users.</li>
                    <li>Circumvent fees or tamper with Postam’s systems.</li>
                </ul>
                <p>Violations may result in removal, suspension, or permanent ban.</p>

            <p><span className='font-bold block mt-7'>7. Marketplace & Classifieds</span></p>
              <ul className="list-disc pl-5">
                <li>Listings must be truthful and accurate.</li>
                <li>Postam does not guarantee the quality, legality, or safety of products, jobs, or services offered by users.</li>
                <li>Transactions are solely between buyers and sellers. Postam is not liable for disputes, fraud, or failed deliveries.</li>
              </ul>

            <p><span className='font-bold block mt-7'>8. Intellectual Property</span></p>
              <ul className="list-disc pl-5">
                <li>The Postam logo, trademarks, design, and software are our property.</li>
                <li>You may not copy, distribute, or exploit them without written consent.</li>
              </ul>

            <p><span className='font-bold block mt-7'>9. Disclaimer of Warranties</span></p>
               <ul className="list-disc pl-5">
                <li>Postam is provided “as is” and “as available.”</li>
                <li>We make no guarantees about uptime, performance, or error-free experience.</li>
                <li>We disclaim all implied warranties, including merchantability and fitness for a particular purpose.</li>
              </ul>
            
            <p><span className='font-bold block mt-7'>10. Limitation of Liability</span></p>
               <ul className="list-disc pl-5">
                <li>To the fullest extent permitted by law, Postam and its affiliates are not liable for indirect, incidental, or consequential damages.</li>
                <li>Our maximum liability is limited to the amount you paid us (if any) in the past 12 months.</li>
              </ul>

            <p><span className='font-bold block mt-7'>11. Indemnification</span>You agree to defend, indemnify, and hold harmless Postam against claims, damages, or expenses resulting from your use of the App, your content, or violation of these Terms.</p>
               
            <p><span className='font-bold block mt-7'>12. Termination</span></p>
               <ul className="list-disc pl-5">
                <li>We may suspend or terminate your account at any time for violations or misuse.</li>
                <li>You may stop using Postam at any time by closing your account.</li>
                <li>Certain rights (e.g., indemnification, intellectual property) will survive termination.</li>
              </ul>

            <p><span className='font-bold block mt-7'>13. Changes to Terms</span>YWe may update these Terms periodically. Continued use after changes means you accept the new Terms.</p>

            <p><span className='font-bold block mt-7'>14. Governing Law</span>These Terms are governed by the laws of the Federal Republic of Nigeria. Disputes may be settled through arbitration or local courts, depending on jurisdiction.</p>

            <p><span className='font-bold block mt-7'>15. Contact</span>For questions, support, or complaints, please contact us at: <a className='text-primary' href='mailto:support@getpostam.com'>support@getpostam.com</a></p>
          
      </div>
    </section>
  );
};

export default Privacy;
