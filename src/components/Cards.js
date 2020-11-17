import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1> The Courses We Offer</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Enjoy the thrill and freedom of riding a motorcycle. Join our Learn2Ride course where we teach you how to ride from scratch. Wait scratch that...from before scratch too. Our only prerequisite is that you should be able to ride a bicycle, but if you cannot,we will teach you how to.'
              label='Learn2Ride Course'
              path='/courses'
            />
            <CardItem
              src='images/img-2.jpg'
              text='This is a one time class that is designed for those who are thinking if Motorcycle riding is for .'
              label='Introductory Motorcycle Experience'
              path='/courses'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/on_the_road.jpg'
              text='Are you hesitant on riding on our busy, crazy drivers and bodas filled roads? Are you coming back to motorcycling after several years away?
              Then this course is for you'
              label='On the Road Confidence Course'
              path='/courses'
            />
            <CardItem
              src='images/Rider_competency.png'
              text="Don't leave it to chance. Let us handle your riders recruitment process, reduce your risks of crashes and loss of revenue and time"
              label='Rider Competency Standard'
              path='/courses'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
