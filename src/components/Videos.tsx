import React, { useEffect } from 'react';

import '../styles/Videos.css';
import avatar from '../images/avatar.png';

import thumb1 from '../images/thumb.jpg';
import thumb2 from '../images/thumb.jpg';
import thumb3 from '../images/thumb.jpg';
import thumb4 from '../images/thumb.jpg';
import thumb5 from '../images/thumb.jpg';
import thumb6 from '../images/thumb.jpg';

export default function Videos() {

  interface Props {
    views: number;
    days: number;
    thumb: string;
  }

  function Video({days, views, thumb }: Props) {
    return (
      <div className="videos__video">
        <img className="videos__thumb" src={thumb} alt="thumb"/>
        <div className="videos__row">
          <img src={avatar} alt="avatar" className="videos__avatar"/>

          <div>
            <h2 className="videos__title">NOME DO VIDEO</h2>
            <ul>
              <li>pewdiepie</li>
              <li>{views} visualizações</li>
              <li>há {days} dias</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return(
    <div className="videos">
      <Video views={Math.floor(Math.random() * 9999)} days={Math.floor(Math.random() * 30)} thumb={thumb1} />
      <Video views={Math.floor(Math.random() * 9999)} days={Math.floor(Math.random() * 30)} thumb={thumb3} />
      <Video views={Math.floor(Math.random() * 9999)} days={Math.floor(Math.random() * 30)} thumb={thumb4} />
      <Video views={Math.floor(Math.random() * 9999)} days={Math.floor(Math.random() * 30)} thumb={thumb5} />
      <Video views={Math.floor(Math.random() * 9999)} days={Math.floor(Math.random() * 30)} thumb={thumb6} />
      <Video views={Math.floor(Math.random() * 9999)} days={Math.floor(Math.random() * 30)} thumb={thumb2} />
      <Video views={Math.floor(Math.random() * 9999)} days={Math.floor(Math.random() * 30)} thumb={thumb4} />
      <Video views={Math.floor(Math.random() * 9999)} days={Math.floor(Math.random() * 30)} thumb={thumb6} />
      <Video views={Math.floor(Math.random() * 9999)} days={Math.floor(Math.random() * 30)} thumb={thumb2} />
      <Video views={Math.floor(Math.random() * 9999)} days={Math.floor(Math.random() * 30)} thumb={thumb1} />
      <Video views={Math.floor(Math.random() * 9999)} days={Math.floor(Math.random() * 30)} thumb={thumb3} />
      <Video views={Math.floor(Math.random() * 9999)} days={Math.floor(Math.random() * 30)} thumb={thumb1} />
      <Video views={Math.floor(Math.random() * 9999)} days={Math.floor(Math.random() * 30)} thumb={thumb4} />
      <Video views={Math.floor(Math.random() * 9999)} days={Math.floor(Math.random() * 30)} thumb={thumb6} />
      <Video views={Math.floor(Math.random() * 9999)} days={Math.floor(Math.random() * 30)} thumb={thumb5} />
      <Video views={Math.floor(Math.random() * 9999)} days={Math.floor(Math.random() * 30)} thumb={thumb1} />
    </div>
  );
}