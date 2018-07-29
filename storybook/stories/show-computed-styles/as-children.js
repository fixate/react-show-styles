import React from 'react';

import ShowComputedStyle from '../../../src/ShowComputedStyle';

const ShowComputedStyleStory = () => (
  <ShowComputedStyle stylesToCompute={['color', 'font-size']}>
    {({computedStyles}) => (
      <div style={{fontSize: '11px', color: 'skyblue'}}>{JSON.stringify(computedStyles)}</div>
    )}
  </ShowComputedStyle>
);

export default ShowComputedStyleStory;
