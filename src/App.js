import { useState } from "react";
import NavBar from "./components/NavBar";
import Perfs from "./components/Perfs";
import Footer from "./components/Footer";
import Clothes from "./components/Clothes";

function App() {
  const [totalCount, setTotalCount] = useState(0);
  return (
    <main className="bg-home-bg bg-cover bg-no-repeat min-h-screen">
      <NavBar totalCount={totalCount} setTotalCount={setTotalCount} />
      <div className="w-11/12 grid place-items-center mx-auto mt-10">
        <Perfs setTotalCount={setTotalCount} />
        <Clothes setTotalCount={setTotalCount} />
      </div>
      <Footer />
    </main>
  );
}

export default App;
