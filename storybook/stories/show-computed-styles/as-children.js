import React from 'react';

import ShowComputedStyles from '../../../src/ShowComputedStyles';

const ShowComputedStyleStory = () => (
  <ShowComputedStyles stylesToCompute={['color', 'font-size']}>
    {({computedStyles}) => (
      <div style={{fontSize: '11px', color: 'skyblue'}}>{JSON.stringify(computedStyles)}</div>
    )}
  </ShowComputedStyles>
);

export default ShowComputedStyleStory;
