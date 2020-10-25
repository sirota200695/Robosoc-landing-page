import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Image, { FluidObject } from 'gatsby-image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import 'typeface-montserrat';
import 'typeface-inter';
import Icon from '../assets/svg-icons/bear-logo.svg';

interface ContentfulCarouselNode {
  id: string;
  title: string,
  description: {
    description: string;
  };
  image: {
    fluid: FluidObject
  }
}

interface AllContentfulCarousel {
  allContentfulCarousel: {
    nodes: ContentfulCarouselNode[]
  },
  allContentfulCarouselMobile: {
    nodes: ContentfulCarouselNode[]
  }
}

const SectionWrapper = styled.section`
  height: 100vh;
  width: 100%;
  
  .carousel-indicators {
    
      li {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        margin-right: 8px;
        margin-left: 8px;
        background-color: #d8d8d8;
        bottom: 10px;
      }
      
      .active {
         background-color: #ed327b;
        }
        
        @media(max-width: 600px) {
          margin-right: 6px;
          margin-left: 6px;
          bottom: -30px;
          width: 10px;
          height: 10px;
        }
    }
    
    .carousel-control-next {
      span {
        margin-left: 150px;
      } 
    }
    
    .carousel-control-prev {
      span {
        margin-right: 150px;
      } 
    }
  
  .mobile-wrapper {
    height: 100%;
    width: 100%;
    display: none;
  }
  
  .desktop-wrapper {
    height: 100%;
    width: 100%;
  }
  
  @media(max-width: 600px) {
    .mobile-wrapper {
      display: block;
    }
    
    .desktop-wrapper {
      display: none;
    }
  }
  
`;


const CarouselItemCaption = styled.div`
  position: absolute;
  color: #fff;
  
  @media(max-width: 600px) {
    display: none;
  }

  
  h2 {
    font-family: Montserrat, sans-serif;
    font-size: 64px;
    font-weight: bold;
  }
  
  p {
    font-family: Inter, sans-serif;
    font-size: 24px;
    font-weight: 500;
  }
`;

const CarouselItemMobileWrapper = styled.div`
  padding: 20px 30px;
`;

const CarouselItemMobile = styled.div`
   position: relative;
   overflow: auto;
`;

const CarouselItemMobileTitle = styled.h3`
  font-family: Montserrat, sans-serif;
  font-size: 24px;
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: 0.5px;
  text-align: center;
  color: #0d1f41;
  margin-top: 20px;
`;

const CarouselItemMobileDescription = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  line-height: 1.57;
  color: #5e6066;
`;

const CarouselItemMobileSticker = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 122px;
  height: 24px;
  border-radius: 3px;
  background-color: #ed327b;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  z-index: 123;
  display: flex;
  align-items: center;
  justify-content: center;
`

const imageStyles = {
  height: '100vh',
  width: '100%',
  objectFit: 'cover',
};

const imageStylesMobile = {
  marginTop: '12px',
  height: '50vh',
  width: '100%',
  objectFit: 'cover',
};

const carouselCaptionStyles = [
  {
    top: '70px',
    textAlign: 'center',
    width: '75%',
    left: '50%',
    transform: 'translate(-50%)',
  },
  {
    bottom: '100px',
    left: '70px',
    textAlign: 'left',
    width: '47%',
  },
  {
    bottom: '188px',
    left: '50%',
    textAlign: 'left',
    width: '45%',
  },
  {
    top: '115px',
    left: '100px',
    textAlign: 'left',
    width: '45%',
  },
  {
    bottom: '130px',
    left: '47%',
    textAlign: 'left',
    width: '47%',
  },
  {},
];

const SectionThree = () => {
  const data: AllContentfulCarousel = useStaticQuery(graphql`
    {
        allContentfulCarousel {
          nodes {
            id
            title
            description {
              description
            }
            image {
              fluid{
                ...GatsbyContentfulFluid
              }
            }
          }
        }
        allContentfulCarouselMobile {
          nodes {
            id
            title
            description {
              description
            }
            image {
              fluid{
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }`);

  const carouselItems = () => {
    return data.allContentfulCarousel.nodes.reverse().map((node, index) => {
      return <Carousel.Item key={node.id}>
        <Image data-sal="fade" data-sal-duration="500" fluid={node.image.fluid} style={imageStyles} alt={node.title} />
        <CarouselItemCaption data-sal="fade" data-sal-delay="500" data-sal-duration="500" style={carouselCaptionStyles[index]}>
          {/*{index === 4 ? <Icon /> : ''}*/}
          <h2>{node.title}</h2>
          <p>{node.description.description}</p>
        </CarouselItemCaption>
      </Carousel.Item>;
    });
  };

  const carouselMobileItems = () => {
    return data.allContentfulCarouselMobile.nodes.reverse().map((node) => {
      return <Carousel.Item key={node.id}>
        <CarouselItemMobile>
          <CarouselItemMobileSticker>
            <span>Why RoboSOC</span>
          </CarouselItemMobileSticker>
          <Image fluid={node.image.fluid} style={imageStylesMobile} alt={node.title} />
          <CarouselItemMobileWrapper>
            <CarouselItemMobileTitle>{node.title}</CarouselItemMobileTitle>
            <CarouselItemMobileDescription>{node.description.description}</CarouselItemMobileDescription>
          </CarouselItemMobileWrapper>
        </CarouselItemMobile>
      </Carousel.Item>;
    });
  };

  return (
    <SectionWrapper>
      <div className="desktop-wrapper">
        <Carousel interval={8000}>
          {carouselItems()}
        </Carousel>
      </div>
      <div className="mobile-wrapper">
        <Carousel interval={8000} controls={false}>
          {carouselMobileItems()}
        </Carousel>
      </div>

    </SectionWrapper>
  );
};


export default SectionThree;
