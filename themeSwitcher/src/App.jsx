import { useState,useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light")
  
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  //actual theme changing code-
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode]);

  return (
    <>
      <h1 className="p-4 bg-slate-500 text-3xl">Parallax</h1>
      <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeButton />
            </div>

            <div className="w-full max-w-sm mx-auto">
             <Card/>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
