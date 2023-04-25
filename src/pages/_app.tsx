import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../../store";
import UserContext from "@/Context/userContext";
import Main from "@/Layouts/Main/Main";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <UserContext>
        <Main>
          <Component {...pageProps} />
        </Main>
      </UserContext>
    </Provider>
  );
}
