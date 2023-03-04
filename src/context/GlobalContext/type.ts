import { ComponentType, PropsWithChildren, ReactNode } from "react";

export interface GlobalContextProvider {
  components: Array<ComponentType<PropsWithChildren<any>>>;
  children: ReactNode;
}
