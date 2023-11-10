import NavBar from "./components/NavBar";
import Perfs from "./components/Perfs";

function App() {
  return (
    <main className="">
      <NavBar />
      <div className="w-11/12 grid place-items-center mx-auto mt-10">
        <Perfs />
      </div>
    </main>
  );
}

export default App;
