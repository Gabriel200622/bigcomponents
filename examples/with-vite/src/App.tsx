import Header from "./components/header";
import { Button } from "@bigcomponents/core";

function App() {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center">
        <h1 className="mt-10 text-2xl font-bold">Hello World!</h1>

        <Button className="mt-5 text-lg" asChild variant="link">
          <a
            target="_blank"
            href="https://github.com/Gabriel200622/bigcomponents"
          >
            See documentation
          </a>
        </Button>
      </div>
    </>
  );
}

export default App;
