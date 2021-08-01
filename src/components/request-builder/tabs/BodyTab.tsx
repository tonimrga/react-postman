import React from 'react';

import './BodyTab.css';

interface Props {
  body: string;
  onBodyChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const BodyTab: React.FC<Props> = (props: Props) => {  
  return (
    <div className="request-builder-body"> 
      <textarea className="body-textarea" onChange={props.onBodyChange}>
        {props.body}
      </textarea>   
    </div>
  );
}