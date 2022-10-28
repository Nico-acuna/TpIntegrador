import React, { useRef, useEffect } from "react";

function useOutsideController(ref, handleClickAway) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClickAway();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
}

export function ClickAwayListener(props) {
  const {handleClickAway} = props;
  const wrapperRef = useRef(null);
  useOutsideController(wrapperRef, handleClickAway);

  return <div ref={wrapperRef}>{props.children}</div>;
}