import React, { useEffect, useRef } from "react";

import { renderPlacholderJson } from "../../../utils";

import "./BodyTab.css";

const TAB_SIZE = 4;

interface Props {
  body: string;
  onBodyChange: (value: string) => void;
}

export const BodyTab: React.FC<Props> = (props: Props) => {  
  const textareaRef = useRef<HTMLTextAreaElement>(null); 
  const cursorPosition = useRef<number>(-1);

  useEffect(() => {
    if (cursorPosition.current >= 0) {
      const cursorPositionWithSpaces = cursorPosition.current + TAB_SIZE;
      textareaRef.current!.selectionStart = cursorPositionWithSpaces;
      textareaRef.current!.selectionEnd = cursorPositionWithSpaces;
    }
  }, [cursorPosition.current])

  const handleTabPress = (selectionStart: number) => {
    const emptySpaces = " ".repeat(TAB_SIZE);
    cursorPosition.current = selectionStart;
    const value = props.body.substring(0, selectionStart) + emptySpaces + props.body.substring(selectionStart);
    props.onBodyChange(value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();      
      handleTabPress(e.currentTarget.selectionStart);
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.onBodyChange(e.target.value);
  };

  return (
    <div className="request-builder-body"> 
      <textarea 
        className="body-textarea"
        placeholder={renderPlacholderJson()}
        ref={textareaRef}
        value={props.body}
        onChange={onChange}
        onKeyDown={onKeyDown}
      /> 
    </div>
  );
}