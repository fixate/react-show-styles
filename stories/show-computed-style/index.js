import React from 'react';

import ShowComputedStyle from '../../src/ShowComputedStyle';

const ShowComputedStyleStory = () => (
  <ShowComputedStyle styleToCompute="font-size">
    (({props}) =>
    <div>{JSON.stringify(props)}</div>
    )
  </ShowComputedStyle>
);

export default ShowComputedStyleStory;
