import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useGetState from "@/hooks/useGetState";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isInput, setIsInput] = useState(false)
  const [history, setHistory] = useState<string[]>([])
  const router = useRouter()
  const unFiltered = useGetState()
  const data = unFiltered?.data?.filter(i => i.quantity !== 0)
  const isFavourite = unFiltered?.data?.some(i => i.favourite === true)


  useEffect(() => {
    const storedArray = localStorage.getItem('history');
    if (storedArray) {
      setHistory(JSON.parse(storedArray));
    }
  }, []);

  const handleHistory = (e: any) => {
    setIsInput(false)
    router.push(`/search?query=${e}`);
  }

  const toggleSearch = () => {
    setIsActive(!isActive);
  };

  const toggleInput = () => {
    setIsInput(!isInput)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const event = e.target.search.value
    if (event === "") {
      return
    }
    const indexToRemove = history.includes(event);

    if (indexToRemove) {
      router.push(`/search?query=${event}`);
    } else {
      if (history.length === 0) {
        setHistory([event])
        localStorage.setItem("history", JSON.stringify([event]))
      } else {
        setHistory(() => [...history, event])
        localStorage.setItem("history", JSON.stringify([...history, event]))
      }
      router.push(`/search?query=${event}`);
    }
    e.target.reset()
  }


  const deleteHistory = (e: string) => {
    const indexToRemove = history.indexOf(e);

    if (indexToRemove !== -1) {
      let hist: string[] = [...history]
      hist.splice(indexToRemove, 1)

      setHistory(hist as string[])
      localStorage.setItem("history", JSON.stringify(hist as string[]))
    }
  }
  return (
    <>
      <NavbarDesktop history={history}
        data={data}
        toggleSearch={toggleSearch}
        isActive={isActive}
        isFavourite={isFavourite}
        handleSubmit={handleSubmit}
        toggleInput={toggleInput}
        isInput={isInput}
        handleHistory={handleHistory}
        deleteHistory={deleteHistory}
      />
      <NavbarMobile toggleInput={toggleInput}
        isActive={isActive}
        toggleSearch={toggleSearch}
        data={data}
        handleSubmit={handleSubmit}
        isInput={isInput}
        history={history}
        handleHistory={handleHistory}
        deleteHistory={deleteHistory}
      />
    </>
  );
};

export default Navbar;
