import React from "react";
import './styles/carousel.css';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

export default function Carousel() {
 return <ImageSlider slides ={SliderData} />;
}

