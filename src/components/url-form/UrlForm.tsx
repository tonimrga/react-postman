import React, { useState } from "react";

import { MethodPicker } from "./MethodPicker";
import "./UrlForm.css";

interface Props {
  isRequestPending: boolean;
  onSendRequest: (url: string, method: string) => void;
}

export const UrlForm: React.FC<Props> = (props: Props) => {
  const [method, setMethod] = useState<string>("get");
  const [url, setUrl] = useState<string>("");

  const onUrlChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value);
  };

  const onMethodChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setMethod(e.currentTarget.value);
  };

  const onSendRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSendRequest(url, method);
  };

  const isSendButtonDisabled = () => {
    return props.isRequestPending || url === "";
  };

  return (
    <form className="url-form" onSubmit={onSendRequest}>
      <MethodPicker method={method} onMethodChange={onMethodChange} />
      <input
        className="url-form__input"
        type="text"
        value={url}
        onChange={onUrlChange}
      />
      <input
        className="url-form__submit"
        disabled={isSendButtonDisabled()}
        type="submit"
        value={props.isRequestPending ? "Sending..." : "Send"}
      />
    </form>
  );
}