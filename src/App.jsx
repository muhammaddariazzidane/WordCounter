import React, { useState, Suspense } from "react";
import Navbar from "./components/Navbar";
import Loading from "./utils/Loading";
import Footer from "./components/Footer";
const WordCounter = React.lazy(() => import("./components/WordCounter"));

export default function App() {
  const [jumlah, setJumlah] = useState(0);

  const hitungKata = (event) => {
    const inputText = event.target.value;
    const jumlahKata = inputText.trim().split(/\s+/).filter(Boolean).length;
    setJumlah(jumlahKata);
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <div className=" w-full py-12 px-3 lg:px-12">
          <WordCounter jumlah={jumlah} hitungKata={hitungKata} />
        </div>
        <Footer />
      </Suspense>
    </>
  );
}
