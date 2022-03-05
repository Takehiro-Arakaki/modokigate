import { useEffect, useState } from "react";

export const setTimerSource = (
  source: string, sourceArray: string[]
  ) => {
  const [resultSource, setSource] = useState(source)

  useEffect(() => {
    const createTimer = setTimeout(() => {
      setSource(source)
    }, 1000)

    return () => {
      clearTimeout(createTimer)
    }
  }, sourceArray)

  return (
    resultSource
  )
}
