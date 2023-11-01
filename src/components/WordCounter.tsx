import { useState, useRef } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Clipboard, ClipboardCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import AlertMessage from './notification/AlertMessage';

export default function WordCounter(props: any) {
  const { hitungKata, jumlah, jumlahKarakter } = props;

  const [copied, setCopied] = useState(false);
  const [notif, setNotif] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const copyToClipboard = () => {
    if (!jumlah) {
      setNotif(true);
      setTimeout(() => {
        setNotif(false);
      }, 2000);
      return;
    }

    textareaRef.current?.select();
    document.execCommand('copy');

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const hitungHurufDanParagraf = (text: string) => {
    const paragraphs = text.trim().split(/\n+/).filter(Boolean);
    return {
      totalParagraphs: paragraphs.length,
    };
  };

  const { totalParagraphs } = hitungHurufDanParagraf(
    textareaRef.current?.value || ''
  );

  return (
    <div className="max-w-5xl mt-10 mx-auto">
      {notif && <AlertMessage message={''} />}
      {copied && <AlertMessage message={'Copied !'} />}
      <Textarea
        ref={textareaRef}
        onChange={hitungKata}
        autoFocus
        className="min-h-[20rem]  md:placeholder:text-lg placeholder:text-base placeholder: selection:bg-indigo-600 selection:text-white selection:rounded-lg p-5 py-3 placeholder:text-gray-600 dark:placeholder:text-gray-400 dark:text-slate-100 text-black    text-lg"
        placeholder="Ketik atau tempelkan teks anda disini !"
      />
      <div className=" flex mt-4 justify-between gap-1 items-center">
        <div className="flex gap-2 flex-wrap">
          <Badge className="md:text-sm " variant="purple">
            {jumlah} Kata
          </Badge>
          <Badge className="md:text-sm ">{totalParagraphs} Paragraf</Badge>
          <Badge className="md:text-sm " variant="success">
            {jumlahKarakter} Karakter
          </Badge>
        </div>
        <div className="max-w-xs">
          <Button
            onClick={copyToClipboard}
            variant={copied ? 'success' : 'outline'}
            size="icon"
          >
            {copied ? (
              <ClipboardCheck className="h-5 w-5" />
            ) : (
              <Clipboard className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
