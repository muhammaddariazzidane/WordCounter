import { useState } from 'react';
import WordCounter from '@/components/WordCounter';
import Navbar from '@/components/navigation/Navbar';

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
      <Navbar />
      <div className="px-6 w-full">
        <WordCounter
          hitungKata={hitungKata}
          jumlah={jumlah}
          jumlahKarakter={jumlahKarakter}
        />
      </div>
    </>
  );
}
