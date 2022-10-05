import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import { FaCoffee } from 'react-icons/fa';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>LLamar a</LinkTitle>
          <LinkItem href="tel:+53 58-467-340">+53 58-467-340</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:carlosbarcia93@gmail.com">
          carlosbarcia93@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Come to the dark side we have coffee      <FaCoffee size="2rem" /></Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/carlosb93">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://t.me/ms_charlie93">
          <BsTelegram size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/charlie_wave/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
