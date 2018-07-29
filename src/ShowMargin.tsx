import * as React from 'react';

export interface IShowMarginProps {
  children: React.ReactChild;
  style: {[key: string]: string | number};
  [key: string]: any;
}

class ShowMargin extends React.Component<IShowMarginProps> {
  public static displayName = 'ShowMargin';

  public render() {
    const {children, style, ...restProps} = this.props;

    return (
      <div
        style={{
          backgroundColor: '#f7cb9d',
          display: 'grid',
          textAlign: 'center',
          ...style,
        }}
        {...restProps}
      >
        {children}
      </div>
    );
  }
}

export default ShowMargin;
