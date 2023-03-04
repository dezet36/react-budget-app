import { GlobalContextProvider } from "./type";

export const AppContextProvider = (props: GlobalContextProvider) => {
  const { components = [], children } = props;

  return (
    <>
      {components.reduceRight((acc, Component) => {
        return <Component>{acc}</Component>;
      }, children)}
    </>
  );
};
