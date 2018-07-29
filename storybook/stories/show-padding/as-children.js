import React from 'react';

import ShowPadding from '../../../src/ShowPadding';

const PaddingStory = () => (
  <ShowPadding>
    {({style}) => <div style={{padding: '30px', ...style}}>styled padding</div>}
  </ShowPadding>
);

export default PaddingStory;
