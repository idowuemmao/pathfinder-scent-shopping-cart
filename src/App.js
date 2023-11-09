import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <main className="">
      <NavBar />
      <div className="w-11/12 grid place-items-center mx-auto mt-10">
        <Hero />
      </div>
    </main>
  );
}

export default App;
