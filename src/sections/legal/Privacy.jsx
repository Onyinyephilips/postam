import React from 'react'

const Privacy = () => {
  return (
    <section id='privacy' className='flex w-full justify-center py-20 max-container'>
        <div className=' w-full sm:w-[650px] padding-x'>
            <h1 className='text-2xl sm:text-3xl font-bold text-postam-gray'>Privacy Policy</h1>
            <p><span className='font-bold block mt-2'>1. Information We Collect</span>We collect the following types of information:</p>
            <ul className="list-disc pl-5">
                <li>Personal Information: such as your name, email address, and phone number when you create an account.</li>
                <li>Payment Information: for transactions including bill payments and shopping.</li>
                <li>Usage Data: such as your activity within the app, features you use, and device type.</li>
                <li>Location Data: with your permission, to improve app functionality.</li>
            </ul>

            <p><span className='font-bold block mt-7'>2. How We Use Your Information</span>We use the information to:</p>
            <ul className="list-disc pl-5">
                <li>Provide and improve app features (shopping, streaming, payments, etc.)</li>
                <li>Personalize your experience</li>
                <li>Process transactions securely</li>
                <li>Communicate with you about updates and promotions</li>
                <li>Analyze usage to improve performance</li>
            </ul>

            <p><span className='font-bold block mt-7'>3. Data Sharing</span>We do not sell your personal information. We only share data:</p>
            <ul className="list-disc pl-5">
                <li>With service providers (e.g., payment gateways)</li>
                <li>When legally required (e.g., court orders)</li>
                <li>To protect Postam’s rights and users’ safety</li>
            </ul>

            <p><span className='font-bold block mt-7'>4. Data Security</span>We use encryption and best practices to protect your data. However, no system is 100% secure. Always use a strong password and keep your login credentials private.</p>

            <p><span className='font-bold block mt-7'>5. Your Choices</span></p>
            <ul className="list-disc pl-5">
                <li>You can update your profile and preferences anytime.</li>
                <li>You can delete your account by contacting support.</li>
                <li>You can manage app permissions through your device settings.</li>
            </ul>

            <p><span className='font-bold block mt-7'>6. Children's Privacy</span>Postam is not intended for users under 13. We do not knowingly collect data from children.</p>

            <p><span className='font-bold block mt-7'>7. Changes to This Policy</span>We may update this Privacy Policy occasionally. We’ll notify you of significant changes via the app or email.</p>

            <p><span className='font-bold block mt-7'>8. Contact Us</span>Have questions? Reach us at <a className='text-primary' href='mailto:support@postam.app'>support@postam.app</a></p>
          
        </div>
        
    </section>
  )
}

export default Privacy