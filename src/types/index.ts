export interface IRenderFnParameter {
  computedStyles?: {[key: string]: any};
  style?: {[key: string]: any};
  [key: string]: any;
}

export type RenderFn = ({computedStyles, style}: IRenderFnParameter) => React.ReactNode;
