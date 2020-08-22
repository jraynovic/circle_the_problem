import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: '/assets/images/descrip_flyer.png',
    altText: 'Slide 1',
  },
  {
    src:'/assets/images/descrip_flyer_two.png',
    altText: 'Slide 2',
    height:'400px',
    width:'400px'
    
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

 

  

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className='ml-4' style={{width:'95%',height:'auto',objecFit:'fill'}} src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      
     
    >
      {slides}
   </Carousel>
  );
}

export default Example;