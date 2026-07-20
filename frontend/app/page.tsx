import { SiGithub } from "@icons-pack/react-simple-icons";

export default function Home() {
  return (
    <>
      <div className="w-full select-none h-screen text-black flex flex-row flex-1 dark:text-white bg-white dark:bg-black">
        <div className="grow"></div>
        <main className="grow text-center h-full font-sans text-2xl flex flex-col flex-1 gap-2 justify-center align-middle">
          <div className="grow"></div>
          <h3>Alimad Corporations presents...</h3>
          <h1 className="text-5xl font-semibold">
            Submad Titles
          </h1>
          <p className="text-slate-500 text-sm">
            An app that generates subtitles and transcripts on the fly.
          </p>
          <h2>The steps are simple:</h2>
          <div>
            <ol className="text-sm text-left list-decimal list-inside">
              <li>Upload a video</li>
              <li>Wait for transcipt to complete (usually takes upto 5 minutes)</li>
              <li>While the transcript is under process, edit subtitle styles, animations, effects</li>
              <li>Review the transcript, edit or modify subtitle text, and start the renderer</li>
              <li>You render is ready!</li>
            </ol>
          </div>
          <div className="grow-2"></div>
        </main>
        <div className="grow"></div>
      </div>
      <footer className="fixed left-1/2 bottom-2 -translate-x-1/2 flex flex-row flex-1 gap-2">
        <a className="px-2 py-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded-full border cursor-pointer border-gray-600/50 flex gap-1 justify-center align-middle" href="https://github.com/Alimadcorp/SubmadTitles"><SiGithub />Open source</a>
        <a className="px-2 py-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded-full border cursor-pointer border-gray-600/50 flex gap-1 justify-center align-middle" href="https://alimad.co"><img src="https://cdn.alimad.co/f/static/icon/ai.png" className="w-7 h-7" />Alimad Co</a>
      </footer>
    </>
  );
} 
