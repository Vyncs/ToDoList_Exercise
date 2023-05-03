import React, {
  ReactNode,
  createContext,
  memo,
  useCallback,
  useState,
} from "react";
import { Triangle } from "react-loader-spinner";
import { LoaderContainer } from "../components/Search/styles";

export interface ILoaderContext {
  openLoading: () => void;
  closeLoading: () => void;
}

export interface LoaderProviderProps {
  children: ReactNode;
}

export const LoaderContext = createContext<ILoaderContext>(
  {} as ILoaderContext
);

export function Provider({ children }: LoaderProviderProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);

  const openLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const closeLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <LoaderContext.Provider
      value={{
        openLoading,
        closeLoading,
      }}
    >
      {isLoading && (
        <LoaderContainer>
          <Triangle />
        </LoaderContainer>
      )}
      {children}
    </LoaderContext.Provider>
  );
}

export const LoaderProvider = memo(Provider);
