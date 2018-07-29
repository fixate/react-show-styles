import React from 'react';

import ShowPadding from '../../../src/ShowPadding';

const PaddingStory = () => (
  <ShowPadding
    render={({style}) => <div style={{padding: '30px', ...style}}>styled padding</div>}
  />
);

export default PaddingStory;
