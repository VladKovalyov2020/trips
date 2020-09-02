import React from 'react';

// Modules

import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

// Components

//import { sliderList } from '../../../constans/landingPage';
import { ReactIcon } from '../../ReactIcon';

// Styles

import './styles.scss';

// ----------------

export const OurTeamSliderCard = ({
  image,
  title,
  subtitle,
  text,
  socialLink,
}) => {
  return (
    <div className="our-team-card">
      <div className="our-team-card__image-wrapper">
        <img src={image} alt={`about-image-${title}`} />
      </div>
      <div className="our-team-card__text-wrapper">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{text}</p>
        <div className="text-wrapper__social-link">
          {socialLink &&
            socialLink.map((link, index) => (
              <a
                href={`${link.to}`}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <div className="social-link__icon-wrapper">
                  <ReactIcon className="icon-wrapper__icon" size="lg">
                    {link.icon()}
                  </ReactIcon>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};