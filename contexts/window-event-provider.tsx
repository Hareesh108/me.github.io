"use client"
import { createContext, JSX, useContext, useEffect, useState } from "react"

type WindowEvent = {
  scrollY: number
  scrollX: number
}
const WindowEvent = createContext<WindowEvent | null>(null)

function WindowEventProvider({ children }: { children: JSX.Element }) {
  const [events, setEvents] = useState<WindowEvent>({scrollY:0, scrollX:0})    

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const scrollX = window.scrollX
      setEvents(e => ({ ...e, scrollY, scrollX }))
    }
    window.addEventListener("scroll", onScroll)

    const storedScrollY = localStorage.getItem("scrollY");
    if (storedScrollY) {
      // window.scrollTo(parseInt(storedScrollY), 0);
      setEvents(e => ({ ...e, scrollX, scrollY }))
    }

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onBeforeUnload = () => {
      localStorage.setItem("scrollX", events.scrollX.toString());
      localStorage.setItem("scrollY", events.scrollY.toString());
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events.scrollY]);

  return (
    <WindowEvent.Provider value={{ ...events }}>
      {children}
    </WindowEvent.Provider>
  )
}

function useWindowEvent() {
  const windowEvent = useContext(WindowEvent)
  if(!windowEvent){
    throw new Error("useWindowEvent must be used within a <WindowEventProvider />")
  }
  return windowEvent
}

export { useWindowEvent, WindowEventProvider }
