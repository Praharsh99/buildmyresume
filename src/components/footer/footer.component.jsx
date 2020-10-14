import React, { useState } from 'react';

import Modal from '../modal/modal.component';

import { Avatar } from '@material-ui/core';

import './footer.styles.css';

const Footer = () => {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <div className="footer">
      <div>
        <a
          href="https://www.instagram.com/praharsh_paravastu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GiLwx7VUSkc9cokn2XTog0Y9FxB2sRG8Zg30y3PbQ=s88-c-k-c0x00ffffff-no-rj-mo" />
          <span>By Praharsh Paravastu</span>
        </a>
      </div>

      <div onClick={handleClick}>
        <span>Privacy Note</span>

        {modal && (
          <Modal handleClose={handleClick}>
            <div className="modal__privacyNote">
              <h1>Privacy Notice</h1>

              <div>
                <span>
                  This website does not collect the information users provide to
                  create their resumes.
                </span>
                <span>
                  Google Analytics and Facebook Pixel are implemented to examine
                  the use of this website. They use cookies and collect user´s
                  usage data that Google and Facebook may use later to
                  contextualize and personalize the ads of their own advertising
                  network.
                </span>
                <span>
                  Not liability resulting from the use of this website will be
                  considered by the author and users may use it at their own
                  discretion.
                </span>
              </div>
            </div>
          </Modal>
        )}
      </div>

      <div>
        <a
          href="mailto:paravastupraharsh99@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/color/30/000000/online-support.png"
            alt="Online Support"
          />
          <span>Support</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;

// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// <div>
//         <span>share</span>

//         <div className="footer__socialLinks">
//           <FacebookIcon />
//           <TwitterIcon />
//           <LinkedInIcon />
//         </div>
//       </div>
