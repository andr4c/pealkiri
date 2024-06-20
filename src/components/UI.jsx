import { atom, useAtom } from "jotai";

export const currentPageAtom = atom("intro");
export const buttonClickedAtom = atom(false);

export const UI = () => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [buttonClicked] = useAtom(buttonClickedAtom);

  if (buttonClicked) {
    return null;
  }
  
  return (
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center 
      duration-500
      ${currentPage === "home" ? "" : "opacity-0"}`}
      >
        <div className="h-[80%]"></div>
        <button
          onClick={() => setCurrentPage("question")}
          className="pointer-events-auto py-5 px-8 md:px-20 bg-violet-300 text-white font-black rounded hover:bg-violet-500 cursor-pointer transition-colors duration-500"
        >
          ANSWER
        </button>
      </section>
    </div>
  );
};
