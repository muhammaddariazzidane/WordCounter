import React, { useState, useRef } from "react";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/solid";

export default function WordCounter({ hitungKata, jumlah }) {
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef();

  const copyToClipboard = () => {
    textareaRef.current.select();
    document.execCommand("copy");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const hitungKataDanParagraf = (text) => {
    const paragraphs = text.trim().split(/\n+/).filter(Boolean);
    return {
      totalParagraphs: paragraphs.length,
    };
  };

  const { totalParagraphs } = hitungKataDanParagraf(
    textareaRef.current?.value || ""
  );

  return (
    <div className="form-control p-6  rounded-lg shadow-md">
      <textarea
        tabIndex={1}
        ref={textareaRef}
        autoFocus
        onChange={hitungKata}
        className="textarea placeholder:text-lg placeholder: selection:bg-indigo-600 selection:text-white selection:rounded-lg p-5 py-3  border-0 ring-1 ring-indigo-200 focus:ring-indigo-300 focus:outline-none textarea-bordered h-64 text-lg"
        placeholder="Ketik atau tempelkan teks anda disini !"
      ></textarea>
      <div className="label flex justify-between items-center ">
        <div className="flex gap-2 flex-wrap">
          <span className="label-text-alt rounded-full p-1.5  shadow bg-primary px-3 text-white text-[.955rem]">
            {jumlah} Kata
          </span>
          <span className="label-text-alt rounded-full p-1.5 shadow bg-neutral px-3 text-white text-[.955rem]">
            {totalParagraphs} Paragraf
          </span>
        </div>
        <div className="max-w-xs">
          <button
            type="button"
            title={copied ? "Success" : "Copy to clipboard"}
            className={`btn px-3 ${
              copied ? "btn-primary" : "btn-neutral"
            } flex ml-2`}
            onClick={copyToClipboard}
          >
            {copied ? (
              <>
                <span className="text-white">Copied !</span>
                <CheckIcon className="w-6 h-6 text-white" />
              </>
            ) : (
              <ClipboardIcon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
