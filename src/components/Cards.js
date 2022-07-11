import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
              src='images/FOTINHA.jpg'
              text="I'm 19 years old, already graduated in computer tchnician. I love this profession and very much looking forward to the possibilities we can create for the world."
            />
            <CardItem 
              src='images/FOTINHA2.jpg'
              text="Nowadays I work as systems developer in Bosch Curitiba and trying to finish my bacharelor's degree in computer engineering."
            />
          </ul>
          <br></br><br></br>
          <h1>Check out my Highlights!</h1>
          <br></br>
          <ul className='cards__items'>
            <CardItem
              src='images/C-SHARP.png'
              text='Main language dominated'
              label='C#'
              path='/skills'
            />
            <CardItem
              src='images/EFCORE2.jpg'
              text='Used in BackEnd/API'
              label='Entity FrameworkCore'
              path='/skills'
            />
            <CardItem
              src='images/angular.png'
              text='Used in FrontEnd development'
              label='Angular'
              path='/skills'
            />
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
            src='images/basquete.png'
            text='I played and still player various sports'
            label='Basketball'
            path='/hobbies'
            />
            <CardItem
            src='images/csgo.jpg'
            text='I love to play games, mainly RPG and FPS'
            label='CS:GO'
            path='/hobbies'
            />
            <CardItem
            src='images/SCOUT.jpg'
            text='Very pride to participate in scout fraternity'
            label='Scout'
            path='/hobbies'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
