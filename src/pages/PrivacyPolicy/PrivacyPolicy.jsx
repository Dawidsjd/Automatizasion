import React from 'react';
import {
  StyledContainerSubPage,
  StyledWrapperContent,
  StyledContent,
} from './styles';
import Header from '../../Components/HomeAssets/Navbar/Navbar';
import Footer from '../../Components/HomeAssets/Footer/Footer';

const PrivacyPolicy = () => {
  return (
    <StyledContainerSubPage>
      <Header />
      <StyledWrapperContent>
        <StyledContent>
          <h1>Privacy Policy</h1>

          <p>
            Thank you for using our FlowView application. Our goal is to provide
            you with the best possible experience while using our time
            management tool. Below, we present our privacy policy, which aims to
            protect your privacy and personal data.
          </p>

          <h2>1. Collection and Use of Data:</h2>
          <p>
            - The FlowView application collects only the information necessary
            to ensure its proper functioning. The data you provide during
            registration, such as your email address, is used solely for
            identification purposes and communication with you.
          </p>
          <p>
            - We do not store any sensitive information, such as passwords for
            other accounts or credit card numbers.
          </p>

          <h2>2. Personal Data:</h2>
          <p>
            - Your personal data, such as your email address, will not be
            shared, sold, or rented to third parties without your consent.
          </p>
          <p>
            - We use your personal data only for purposes related to the
            operation of the application, including sending notifications and
            updates regarding our services.
          </p>

          <h2>3. Data Security:</h2>
          <p>
            - We strive to provide the highest level of security for your data.
            We use appropriate technical and organizational measures to protect
            your information from unauthorized access, loss, alteration, or
            destruction.
          </p>

          <h2>4. Cookies:</h2>
          <p>
            - The FlowView application may use cookies to facilitate your use of
            our application. Cookies are small text files stored on your device
            that help us identify you as a user.
          </p>

          <h2>5. Consent:</h2>
          <p>
            - By using our application, you consent to our privacy policy and
            accept the terms of collecting, storing, and processing your
            personal data as described above.
          </p>

          <h2>6. Contact:</h2>
          <p>
            - If you have any questions about our privacy policy or how we
            process your personal data, please contact us via the Support
            section in the application.
          </p>

          <p>
            We encourage you to regularly review our privacy policy to be aware
            of what information we collect and how we process it. Thank you for
            your trust and for using the FlowView application.
          </p>
        </StyledContent>
      </StyledWrapperContent>
      <Footer />
    </StyledContainerSubPage>
  );
};

export default PrivacyPolicy;
