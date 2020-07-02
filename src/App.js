import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Chat from "../public";

import FirebaseProvider from "./components/FirebaseProvider";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./config/theme";
import { SnackbarProvider } from "notistack";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <FirebaseProvider>
          <Router>
            <Switch>
              <Route path="/" exact component={Chat} />
            </Switch>
          </Router>
        </FirebaseProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
