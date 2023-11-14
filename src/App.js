import { useState } from "react";
import NavBar from "./components/NavBar";
import Perfs from "./components/Perfs";

function App() {
  const [totalCount, setTotalCount] = useState(0);
  return (
    <main className="bg-home-bg bg-cover bg-no-repeat min-h-screen">
      <NavBar totalCount={totalCount} />
      <div className="w-11/12 grid place-items-center mx-auto mt-10">
        <Perfs setTotalCount={setTotalCount} />
      </div>
    </main>
  );
}

export default App;
