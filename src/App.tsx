/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, Suspense, lazy } from 'react';
import NavbarSkeleton from './utils/skeleton/NavbarSkeleton';
import WordCounterSkeleton from './utils/skeleton/WordCounterSkeleton';
const Navbar = lazy(() => import('@/components/navigation/Navbar'));
const WordCounter = lazy(() => import('@/components/WordCounter'));

export default function App() {
  const [jumlah, setJumlah] = useState(0);
  const [jumlahKarakter, setJumlahKarakter] = useState(0);

  const hitungKata = (e: any) => {
    const inputText = e.target.value;
    const kata = inputText
      .trim()
      .split(/\s+/)
      .filter((word: string) => word.length > 0);
    setJumlah(kata.length);
    setJumlahKarakter(inputText.replace(/\n/g, '').length);
  };

  return (
    <>
      <Suspense fallback={<NavbarSkeleton />}>
        <Navbar />
      </Suspense>
      <div className="px-6 w-full">
        <Suspense fallback={<WordCounterSkeleton />}>
          <WordCounter
            hitungKata={hitungKata}
            jumlah={jumlah}
            jumlahKarakter={jumlahKarakter}
          />
        </Suspense>
      </div>
    </>
  );
}
