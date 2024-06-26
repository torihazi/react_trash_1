import { useState } from "react";

export const InputBox = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickAddText = () => {
    if (text === "") return;
    setItems([...items, text]);
    setText("");
  };

  return (
    <div>
      <input
        placeholder="何か入力してね"
        value={text}
        onChange={onChangeText}
      />
      <p>入力されたもの</p>
      <p>{text}</p>
      <button onClick={onClickAddText}>追加</button>
      {items.map((value, index) => (
        <p key={index}>
          [{index}]:{value} "{value.slice(-1)}"
        </p>
      ))}
    </div>
  );
};
