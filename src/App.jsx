import { useState } from "react";
import FloatingLogo from "./components/FloatingLogo/FloatingLogo";
import Nav from "./components/Nav/Nav";

function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <FloatingLogo onFinish={() => setShowContent(true)} />
      {showContent && (
        <>
          <Nav />
          
        </>
      )}
    </>
  );
}

export default App;
