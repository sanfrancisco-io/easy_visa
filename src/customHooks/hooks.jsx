import React, {useEffect, useMemo, useState} from 'react';
import {entries} from "next/dist/server/dev/on-demand-entry-handler";

const useElementOnScreen = ({options, targetRef}) => {
  const [isVisible, setIsVisible] = useState('false')

  const callBackFunc = entries => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }
  const optionsMemo = useMemo(() => {
    return options
  }, [options])

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunc, optionsMemo);
    const currentTarget = targetRef.current;

    if(currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget)
    }
  }, [targetRef, optionsMemo])

  return isVisible;
};

export default useElementOnScreen;
