import React from 'react';
// import HeroBgAnimation from '../HeroBgAnimation';
import { 
  HeroContainer, 
  // HeroBg, 
  HeroLeftContainer, 
  Img, 
  HeroRightContainer, 
  HeroInnerContainer, 
  TextLoop, 
  Title, 
  Span, 
  SubTitle, 
  ButtonGroup, 
  ResumeButton 
} from './HeroStyle';
import HeroImg from '../../images/HeroImg.avif';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
         {/* <HeroBg>
           <HeroBgAnimation /> 
        </HeroBg>  */}
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ButtonGroup>
              <ResumeButton href={Bio.resume} target="_blank" rel="noopener noreferrer">
                Check Resume
              </ResumeButton>
              <ResumeButton href={Bio.resume2} download rel="noopener noreferrer">
                Download Resume
              </ResumeButton>
            </ButtonGroup>
          </HeroLeftContainer>

          <HeroRightContainer>
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
