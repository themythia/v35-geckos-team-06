import styled from 'styled-components';
import resonanceDark from '../resonance-dark.svg';
import resonanceLight from '../resonance-light-welcome.svg';
import {Spotify} from '@styled-icons/boxicons-logos';
import circleLight from './img/circle-light.svg';
import circleDark from './img/circle-dark.svg';
import wave from './img/wave.svg';
import {ControllerFastBackward} from '@styled-icons/entypo/'
export const StyledWrapper = styled.div`
 
  background: var(--lt-background);
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  
  @media (prefers-color-scheme: dark) {
    background : var(--dt-background);
  }
`;

export const TopContainer = styled.div`
  grid-row: 1 / 3;
  grid-column: 2 / 6;
  align-self: center;
  justify-self: center;
  
  p {
    color: var(--cl-primary1-600);
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 24px;
    margin-top: 20px;
  }
  @media (prefers-color-scheme: dark) {
    p {
      color: #FFFFFF;
    }
  }
`;
export const Logo = styled.img.attrs(() => ({
  src: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) 
                ? resonanceDark 
                : resonanceLight,
  }))`
  object-fit: cover;
`;

export const CenterContainer = styled.div`
  grid-row: 3 / 5;
  grid-column: 2 / 6;
  position: relative;
`;

// Welcome Page

export const ButtonContainer = styled.div`
  margin: 25% auto;
  width: 162px;
  height: 162px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background: var(--cl-primary1-700);
  @media (prefers-color-scheme: dark) {
    background: var(--dt-radial-gradient);
  } 
  @media (min-width: 768px) {
    margin: 12% auto;
  }
  @media (min-width: 1280px) {
    margin: 9% auto;
  }
`;


export const PlayDiv = styled.div`
  position: absolute;
  top: 20%;
  left: 25%;
  width: 100px;
  height: 100px;
  cursor: pointer;
  clip-path: polygon(0 0, 0% 100%, 100% 50%);
  background: var(--lt-play-button);
  @media (prefers-color-scheme: dark) {
    background: var(--dt-play-button);
  }
`;

export const SpotifyLogo = styled(Spotify)`
  color: var(--cl-primary1-900);
  width:  35px;
  height: 35px;
  
  @media (prefers-color-scheme: dark) {
    color: #1DB954;
  }
`;

export const Circle = styled.img.attrs(() => ({
  src: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) 
       ? circleDark
       : circleLight,
}))`
  position: absolute;
  top: 12.5px;
  left: 50%;
  transform: translateX(-50%);
  @media (min-width: 380px) and (max-width: 428px) {
    top: 20.5px;
  }
  @media (min-width: 788px) {
    top: 17px;
  }
  @media (min-width: 1024px) {
    top: 30px;
  }
  @media (min-width: 1280px) {
    top: 27px;
  }
  @media (min-width: 1440px) {
    top: 36px;
  }
`;

export const WaveRight = styled.img.attrs(() => ({
  src: wave,
}))`
  top: 15%;
  left: 70%;
  position: absolute;
  
  @media (min-width: 768px) {
    top: 11%;
    left: 60%;
  }
  @media (min-width: 1024px) {
    top: 13%;
    left: 58%;
  }
  @media (min-width: 1280px) {
    top:20%;
    left: 56%;
  }
  @media (min-width: 1440px) {
    top: 28%;
    left: 55%;
  }
`;

export const WaveLeft = styled.img.attrs(() => ({
  src: wave,
}))`
  position: absolute;
  top: 30%;
  left: -23%;
  transform: rotate(180deg);
  @media (min-width: 768px) {
    top:22%;
    left: 14%;
  }
  @media (min-width: 1024px) {
    left: 23%;
  }
  @media (min-width: 1280px) {
    top:35%;
    left: 28%;
  }
  @media (min-width: 1440px) {
    top: 41%;
    left: 31%;
  }
`;

// Login Page 

export const ButtonLogin = styled.button`
  font-size: 16px;
  text-transform: uppercase;
  color: var(--cl-primary1-800);
  background: var(--cl-primary1-100);
  border: none;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 1px rgba(0, 14, 51, 0.2);
  margin: 25% auto 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (prefers-color-scheme: dark) {
      background: var(--dt-radial-gradient);
      color: white;
  }
  @media (min-width: 1280px) {
    margin: 15% auto 10px auto;
  }
`;

export const SpotifyButton = styled(Spotify)`
  color: var(--cl-primary1-800);
  width: 40px;
  height: 40px;
  margin-left: 5px;
  
  @media (prefers-color-scheme: dark) {
      color: white;
  }
`;

export const Backward = styled(ControllerFastBackward)`
  color: var(--cl-primary1-700);
  width: 80px;
  height: 80px;
  display: block;
  margin: 0 auto;

  @media (prefers-color-scheme: dark) {
      color: var(--dt-sound-logo);
  }
`;