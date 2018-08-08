import * as React from 'react';
import {cleanup, render} from 'react-testing-library';
import 'jest-dom/extend-expect';

import Button from './styles';

import ShowComputedStyles from '../src/ShowComputedStyles';

afterEach(cleanup);

describe('ShowComputedStyles', () => {
  test('-> returns a computed style when rendering children', () => {
    const styles = [{border: '1px solid'}, {border: '1px solid', outline: 'none'}];

    styles.map(style => {
      const styleProps = Object.keys(style);
      const {container} = render(
        <ShowComputedStyles stylesToCompute={styleProps}>
          {({computedStyles}) => <div style={style}>{JSON.stringify(computedStyles)}</div>}
        </ShowComputedStyles>,
      );

      styleProps.map(prop => expect(container).toHaveTextContent(style[prop]));
    });
  });

  test('-> returns a computed style when rendering a render prop', () => {
    const styles = [{border: '1px solid'}, {border: '1px solid', outline: 'none'}];

    styles.map(style => {
      const styleProps = Object.keys(style);
      const {container} = render(
        <ShowComputedStyles
          render={({computedStyles}) => <div style={style}>{JSON.stringify(computedStyles)}</div>}
          stylesToCompute={styleProps}
        />,
      );

      styleProps.map(prop => expect(container).toHaveTextContent(style[prop]));
    });
  });
});

describe('something', () => {
  test('styles', () => {
    const {container} = render(<div className={styles.testClass} />);
    debugger;
  });
});
