import * as React from 'react';

import {isObject} from './utils';

const appendToComponentChildren = (component: any, append: any) => {
  return {
    ...component,
    children: component.children.every(isObject)
      ? component.children.map((ch: any) => ({
          ...ch,
          children: ch.children.concat(append),
        }))
      : component.children.concat(append),
  };
};

export interface IShowComputedStyleProps {
  children: React.ReactChild;
  styleToCompute: string;
  style?: {[key: string]: string | number};
  tag?: string;
  [key: string]: any;
}

export interface IShowComputedStyleState {
  computedStyle: string | number;
}

class ShowComputedStyle extends React.Component<IShowComputedStyleProps, IShowComputedStyleState> {
  public static displayName = 'ShowComputedStyle';

  public static defaultProps: Partial<IShowComputedStyleProps> = {
    tag: 'div',
  };

  private static state = {computedStyle: ''};

  private elem: HTMLElement;

  private constructor(props: IShowComputedStyleProps) {
    super(props);

    this.elem = null;
  }

  public componentDidMount() {
    const {styleToCompute} = this.props;

    if (this.elem.children.length > 1) {
      throw new Error('ShowComputedStyle expects a single element as a child');
    }

    const el = this.elem.children[0];

    if (!styleToCompute) return;

    const cssDeclaration: CSSStyleDeclaration = window.getComputedStyle(el);
    const computedStyle = cssDeclaration[styleToCompute as any];

    this.setState({computedStyle});
  }

  private setElemRef = (elem: HTMLElement) => {
    this.elem = elem;
  };

  public render() {
    const {computedStyle} = this.state;
    const {children, styleToCompute, style, tag: Tag, ...restProps} = this.props;
    const elemStyle = style ? style : {textAlign: 'center'};
    const computedToAppend = <span> - {computedStyle}</span>;
    const child = Array.isArray(children)
      ? children.every(isObject)
        ? children.map(c => appendToComponentChildren(c, computedToAppend))
        : children.concat(computedToAppend)
      : appendToComponentChildren(children, computedToAppend);

    return (
      <Tag style={elemStyle} {...restProps} ref={this.setElemRef}>
        {child}
      </Tag>
    );
  }
}

export default ShowComputedStyle;
