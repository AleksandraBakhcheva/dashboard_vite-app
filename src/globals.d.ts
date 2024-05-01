// custom.d.ts
interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
}

declare module "*.svg?react" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
