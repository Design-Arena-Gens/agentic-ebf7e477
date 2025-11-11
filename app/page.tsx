"use client";

import { useRef, useState } from "react";

const verses = [
  {
    arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
    translation: "بگو پناه می‌برم به پروردگار مردم"
  },
  {
    arabic: "مَلِكِ النَّاسِ",
    translation: "مالک مردم"
  },
  {
    arabic: "إِلَٰهِ النَّاسِ",
    translation: "معبود مردم"
  },
  {
    arabic: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
    translation: "از شر وسوسه‌گر پنهان شونده"
  },
  {
    arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
    translation: "آن که در سینه‌های مردم وسوسه می‌کند"
  },
  {
    arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ",
    translation: "چه از جنّ باشد و چه از مردم"
  }
];

const audioSrc =
  "https://download.quranicaudio.com/quran/abdul_baset/mujawwad/114.mp3";

export default function HomePage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      void audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <main className="container">
      <section className="hero">
        <h1>سوره ناس</h1>
        <p>تلاوت استاد عبدالباسط عبدالصمد</p>
        <div className="controls">
          <button
            className="play-button"
            type="button"
            onClick={togglePlayback}
            onKeyDown={(event) => {
              if (event.key === " " || event.key === "Enter") {
                event.preventDefault();
                togglePlayback();
              }
            }}
          >
            {isPlaying ? "توقف تلاوت" : "پخش تلاوت"}
          </button>
          <span className="hint">با استفاده از کلید فاصله یا اینتر می‌توانید پخش را کنترل کنید.</span>
        </div>
        <audio
          ref={audioRef}
          src={audioSrc}
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />
      </section>

      <section className="verses">
        {verses.map((verse, index) => (
          <article key={verse.arabic} className="verse">
            <span className="index">{index + 1}</span>
            <p className="arabic" aria-label={`آیه ${index + 1}`}>{verse.arabic}</p>
            <p className="translation">{verse.translation}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
