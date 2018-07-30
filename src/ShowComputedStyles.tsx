import * as React from 'react';

import {RenderFn, IRenderFnParameter} from './types';

export interface IShowComputedStylesProps {
  children?: RenderFn;
  render?: RenderFn;
  stylesToCompute: string[];
  tag: string;
  [key: string]: any;
}

export interface IShowComputedStylesState {
  computedStyles: IRenderFnParameter['computedStyles'];
}

class ShowComputedStyles extends React.Component<
  IShowComputedStylesProps,
  IShowComputedStylesState
> {
  public static displayName = 'ShowComputedStyles';

  public static defaultProps: Partial<IShowComputedStylesProps> = {
    stylesToCompute: [],
    tag: 'div',
  };

  private elem: HTMLElement;

  private constructor(props: IShowComputedStylesProps) {
    super(props);

    this.state = {computedStyles: {}};
  }

  public componentDidMount() {
    const {stylesToCompute} = this.props;

    const el = this.elem.children[0];

    if (!(el instanceof HTMLElement)) {
      throw new Error(
        `ShowComputedStyles requires 'children', or 'render' to return an HTML element. Got: ${el}`,
      );
    }

    const cssDeclaration: CSSStyleDeclaration = window.getComputedStyle(el);
    const computedStyles = stylesToCompute.reduce(
      (acc, property) => ({
        ...acc,
        [property]: cssDeclaration[property as any],
      }),
      {},
    );

    this.setState({computedStyles});
  }

  public render() {
    const {computedStyles} = this.state;
    const {children, render, stylesToCompute, tag, ...restProps} = this.props;
    const Tag = tag as string;
    const renderFn = children || render;

    return (
      <Tag {...restProps} ref={this.setElemRef}>
        {(renderFn as RenderFn)({computedStyles})}
      </Tag>
    );
  }

  private setElemRef = (elem: HTMLElement) => {
    this.elem = elem;
  };
}

export default ShowComputedStyles;
