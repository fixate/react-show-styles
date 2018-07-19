import * as React from 'react';

import {RenderFn} from './types';

export interface ShowPaddingProps {
  children?: RenderFn;
  render?: RenderFn;
}

class ShowPadding extends React.Component<ShowPaddingProps> {
  public render() {
    const {children, render} = this.props;
    const renderFn = render || children;
    const style = {backgroundColor: '#c4dcb7'};

    return renderFn({style});
  }
}

export default ShowPadding;
