import mdiGithub from "@iconify/icons-mdi/github";
import { Icon } from "@iconify/react";
import { ReactNode } from "react";
import "./App.css";

function NoLineBreak({ children }: { children: ReactNode }) {
  return <span className="whitespace-nowrap">{children}</span>;
}

function App() {
  return (
    <main className="flex flex-col items-center justify-center py-2 h-full max-w-2xl mx-auto gap-4">
      <section aria-label="Header" className="flex flex-col items-center">
        <h1 className="font-bold text-[calc(4vw+4vh+10px)] leading-tight text-gray-950 dark:text-gray-50">
          ArkAPI
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed text-[calc(1vh+10px)]">
          {/* ArkAPI 是由 ArkAlliance 发起的明日方舟资源公共
          API，皆在为明日方舟工具站生态提供稳定、易于接入且面向用户体验优化的
          API 服务 */}
          <NoLineBreak>ArkAPI</NoLineBreak> 是由{" "}
          <NoLineBreak>ArkAlliance</NoLineBreak> 发起的
          <NoLineBreak>明日方舟资源公共 API</NoLineBreak>
          <span className="-mr-[calc(0.6vw)]">，</span>
          <br />
          皆在为
          <NoLineBreak>明日方舟工具站</NoLineBreak>
          生态提供<NoLineBreak>稳定、易于接入</NoLineBreak>且
          <NoLineBreak>面向用户体验优化的</NoLineBreak>{" "}
          <NoLineBreak>
            API 服务<span className="-mr-[calc(0.2vw)]">。</span>
          </NoLineBreak>
        </p>
      </section>

      <div className="mt-[calc(3vw+3vh+10px)]" />

      <section
        className="flex flex-col items-center justify-center gap-2"
        aria-label="Links"
      >
        <a
          href="https://github.com/ArkAlliance/ArkAPI"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 transition p-2 rounded-lg outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 active:bg-gray-200 dark:active:bg-gray-700"
        >
          <Icon icon={mdiGithub} className="w-8 h-8 md:w-12 md:h-12" />
        </a>
      </section>

      <footer className="flex flex-col items-center justify-center gap-2">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Made with ❤️ by ArkAlliance.
        </span>
      </footer>
    </main>
  );
}

export default App;
