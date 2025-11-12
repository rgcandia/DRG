import { useState } from "react";
import FloatingLogo from "./components/FloatingLogo/FloatingLogo";
import Nav from "./components/Nav/Nav";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);

  return (
    <>
      <FloatingLogo onFinish={() => {
        setShowContent(true);
        setTimeout(() => setAnimateMenu(true), 300); // espera un poco antes de animar
      }} />

      {showContent && (
        <>
          <Nav animate={animateMenu} />
          
        </>
      )}
    </>
  );
}

export default App;
