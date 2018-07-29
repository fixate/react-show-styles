import * as React from 'react';

import {RenderFn} from './types';
import {getCssProps} from './utils';

export interface IShowPseudoState {
  style: {[key: string]: string};
}

export interface IShowPseudoProps {
  children?: RenderFn;
  className: string;
  pseudoClass: string;
  render?: RenderFn;
}

class ShowPseudo extends React.Component<IShowPseudoProps, IShowPseudoState> {
  public static displayName = 'ShowPseudo';

  public constructor(props: IShowPseudoProps) {
    super(props);

    this.state = {style: {}};
  }

  public componentDidMount() {
    const {className, pseudoClass} = this.props;

    if (!pseudoClass || !className) return;

    const pseudoClassNames = className
      ? className
          .split(' ')
          .filter(cn => !!cn)
          .map(cn => [cn, pseudoClass].join(':'))
      : [];
    const style = pseudoClassNames
      .map(pcn => new RegExp(`(^| )\.${pcn}`))
      .map(getCssProps)
      .reduce((acc, props) => ({...acc, ...props}), {});

    this.setState({style});
  }

  public render() {
    const {style} = this.state;
    const {children, render} = this.props;
    const renderFn = render || children;

    return (renderFn as RenderFn)({style});
  }
}

export default ShowPseudo;
