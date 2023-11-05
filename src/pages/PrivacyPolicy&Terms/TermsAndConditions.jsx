import React, { useEffect } from 'react';

import {
  StyledContainerSubPage,
  StyledWrapperContent,
  StyledContent,
} from './styles';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Header from '../../Components/HomeAssets/Navbar/Navbar';
import Footer from '../../Components/HomeAssets/Footer/Footer';

const TermsAndConditions = () => {
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleScrollToTop);

    handleScrollToTop();

    return () => {
      window.removeEventListener('hashchange', handleScrollToTop);
    };
  }, []);

  return (
    <StyledContainerSubPage>
      <Header />
      <StyledWrapperContent>
        <StyledContent>
          <h1>Terms and Conditions</h1>

          <h2>1. Utilization of Materials under Free License</h2>
          <p>
            1.1. FlowView utilizes materials provided under a free license from
            websites such as:
            <ul>
              <li>
                <a
                  href='https://rapidapi.com/apidojo/api/tasty'
                  target='_blank'
                  rel='noreferrer'
                >
                  Tasty API
                </a>
              </li>
              <li>
                <a
                  href='https://media.flaticon.com/license/license_editorial.pdf?_ga=2.235194182.676126502.1698770555-1678211452.1698257304&_gl=1*fyxny5*fp_ga*MTY3ODIxMTQ1Mi4xNjk4MjU3MzA0*fp_ga_1ZY8468CQB*MTY5ODc3MDU1NS4yLjEuMTY5ODc3MDU2OC40Ny4wLjA.*test_ga*MTY3ODIxMTQ1Mi4xNjk4MjU3MzA0*test_ga_523JXC6VL7*MTY5ODc3MDU1NS4yLjEuMTY5ODc3MDU2OS40Ni4wLjA'
                  target='_blank'
                  rel='noreferrer'
                >
                  Flaticon
                </a>
              </li>
              <li>
                <a
                  href='https://rapidapi.com/lemur-engine-lemur-engine-default/api/lemurbot/'
                  target='_blank'
                  rel='noreferrer'
                >
                  LemurBot API
                </a>
              </li>
              <li>
                <a href='https://mui.com/' target='_blank' rel='noreferrer'>
                  Material-UI (MUI)
                </a>
              </li>
              <li>
                <a
                  href='https://www.iconfinder.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  Iconfinder
                </a>
              </li>
            </ul>
            1.2. FlowView users are obliged to adhere to the terms of use of
            these materials, including licenses, usage policies, or any other
            regulations specified by the providers of these materials.
          </p>

          <h2>2. Utilization of Artificial Intelligence</h2>
          <p>
            2.1. The FlowView application utilizes artificial intelligence
            provided by{' '}
            <a href='https://chat.openai.com' target='_blank' rel='noreferrer'>
              chat.openai.com
            </a>{' '}
            to assist users in coding and resolving programming-related issues.
          </p>
          <p>
            2.2. FlowView users acknowledge that the information and suggestions
            provided by artificial intelligence are offered solely for
            educational purposes and should not be considered as definitive and
            unconditional solutions to programming problems.
          </p>

          <h2>3. Final Provisions</h2>
          <p>
            3.1. FlowView utilizes{' '}
            <a
              href='https://www.bing.com/create'
              target='_blank'
              rel='noreferrer'
            >
              Bing Create
            </a>{' '}
            for creating several graphics used in the application.
          </p>
          <p>
            3.2. FlowView users accept that graphics created using tools such as
            Bing Create are used for illustrative purposes in the application
            and are not presented as users' own work.
          </p>

          <h2>4. Final Provisions</h2>
          <p>
            4.1. Using the FlowView application implies acceptance of these
            terms and conditions.
          </p>
          <p>
            4.2. FlowView reserves the right to amend these terms and conditions
            at any time, which will be announced on the website or within the
            application.
          </p>
          <p>
            3.1. Using the FlowView application implies acceptance of these
            terms and conditions.
          </p>
          <p>
            3.2. FlowView reserves the right to amend these terms and conditions
            at any time, which will be announced on the website or within the
            application.
          </p>

          <p style={{ marginTop: '20px' }}>Thank you for using FlowView!</p>
        </StyledContent>
      </StyledWrapperContent>
      <Footer style={{ position: 'fixed', bottom: 0, width: '100%' }} />
    </StyledContainerSubPage>
  );
};

export default TermsAndConditions;
