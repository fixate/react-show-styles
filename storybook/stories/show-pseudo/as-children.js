import React from 'react';

import ShowPseudo from '../../../src/ShowPseudo';

import './button.css';

const PseudoStory = () => (
  <div>
    <button className="button">button</button>

    <br />

    {['hover', 'active', 'disabled'].map(pseudo => (
      <div key={pseudo}>
        <ShowPseudo pseudoClass={pseudo} className="button">
          {({style}) => (
            <button className="button" style={style}>
              button:{pseudo}
            </button>
          )}
        </ShowPseudo>
        <br />
      </div>
    ))}
  </div>
);

export default PseudoStory;
