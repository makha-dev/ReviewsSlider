import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let slider = setInterval(() =>{
      next();
    }, 3000);
    return () => {
      clearInterval(slider);
    }
    
  }, [index, people]);

  const prev = () => {
    setIndex(index == 0 ? people.length - 1 : index - 1);
  }
  const next = () => {
    setIndex(index == people.length - 1 ?  0 : index + 1);
  }
  return (
    <main className='section'>
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const {id, name, image, title, quote} = person;
          let slideType = 'nextSlide';
          if(index === personIndex) 
            slideType = 'activeSlide';
          else if(personIndex === index - 1 || index === 0 && personIndex === people.length - 1)
            slideType = 'lastSlide';
          
          return (
            <article key={id} className={slideType}>
              <img src={image} alt={name} className='person-img'/>
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className="quote">{quote}</p>
              <FaQuoteRight className='icon'></FaQuoteRight>
            </article>
          );
        })}
        <button className='prev' onClick={prev}>
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button className='next' onClick={next}>
          <FiChevronRight></FiChevronRight>
        </button>
      </div>
    </main>
  );
}

export default App;
