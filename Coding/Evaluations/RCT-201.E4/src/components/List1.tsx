import React, { useState } from 'react';
import useNumberList from '../hooks/useNumberList';

type List1Props = {
  // TODO
  initialValues: number[];
};
const List1 = ({ initialValues }: List1Props) => {
  const [input, setInput] = useState<string>('');
  const { list, appendStart, popEnd, clear, reset } =
    useNumberList(initialValues);
  console.log('list1: ', list);
  // const appendStartFun = () => {};
  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">{/* Label */} List 1</h3>
      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list1-element">
        {/* Each element in a list */}
        {list.map((e) => {
          return `${e} `;
        })}
      </div>

      <input
        data-testid="list1-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        data-testid="list1-btn-append-start"
        onClick={() => {
          appendStart(Number(input));
          setInput('');
        }}
      >
        {/* Append to start of list btn */}
        appendStart
      </button>
      <button
        data-testid="list1-btn-pop-end"
        onClick={() => {
          popEnd();
          setInput('');
        }}
      >
        {/* po last element btn */}
        popEnd
      </button>
      <button data-testid="list1-btn-clear" onClick={() => clear()}>
        {/* clear list and set empty button */}
        clear
      </button>
      <button
        data-testid="list1-btn-reset"
        onClick={() => reset(initialValues)}
      >
        {/* Reset list to default value btn */}
        reset
      </button>
    </div>
  );
};

export default React.memo(List1);
