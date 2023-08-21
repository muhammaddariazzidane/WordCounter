import React, { useState, Suspense } from "react";
import Navbar from "./components/Navbar";
import Loading from "./utils/Loading";
import Footer from "./components/Footer";
const WordCounter = React.lazy(() => import("./components/WordCounter"));

export default function App() {
  const [jumlah, setJumlah] = useState(0);
  const [jumlahKarakter, setJumlahKarakter] = useState(0);

  const hitungKata = (e) => {
    const inputText = e.target.value;
    const jumlahKata = inputText.trim().split(/\s+/).filter(Boolean).length;
    setJumlah(jumlahKata);
    setJumlahKarakter(inputText.length);
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <div className=" w-full py-12 px-3 lg:px-12">
          <WordCounter
            jumlah={jumlah}
            jumlahKarakter={jumlahKarakter}
            hitungKata={hitungKata}
          />
        </div>
        <Footer />
      </Suspense>
    </>
  );
}
