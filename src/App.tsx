import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { ThemeProvider } from "styled-components";

import { ChangeThemeProvider } from "./contexts/changeTheme";
import { GlobalStyle } from "./global/styles/global";
import "./global/styles/global.ts";
import dark from "./global/styles/themes/dark";
import light from "./global/styles/themes/light";
import { useChangeTheme } from "./hooks/useChangeTheme";
import { MainPage } from "./pages/main";


function App() {

  return (
    // Contexto de troca de tema
    <ChangeThemeProvider  >
      
      < MainPage />
    </ChangeThemeProvider >
  );
}

export default App;
