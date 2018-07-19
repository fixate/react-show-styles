export const parseCssText = (cssText: string) =>
  cssText.split(';').reduce((acc, propVal) => {
    const [prop, val] = propVal.split(':');

    return {...acc, [prop.trim()]: val};
  }, {});

export const getCssProps = (reg: RegExp) => {
  const styleSheets: any = [].slice.call(document.styleSheets);

  const props = styleSheets.map((stsh: CSSStyleSheet) => {
    const cssRules = stsh.cssRules ? [].slice.call(stsh.cssRules) : [];

    return cssRules
      .filter(({selectorText}: any) => reg.test(selectorText))
      .map((rules: any) => rules.style.cssText)
      .reduce((acc: string[], rule: string) => acc.concat(rule), []);
  });

  return parseCssText([].concat(...props).join(''));
};

export const isObject = (obj: any) => Object.prototype.toString.call(obj) === '[object Object]';
