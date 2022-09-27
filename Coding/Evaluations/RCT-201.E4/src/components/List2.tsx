import React, { useState } from 'react';
import useNumberList from '../hooks/useNumberList';
type List2Props = {
  // TODO
  initialValues: number[];
};
const List2 = ({ initialValues }: List2Props) => {
  const [input, setInput] = useState<string>('');
  const { list, appendEnd, popEnd, clear, reset } =
    useNumberList(initialValues);
  console.log('list2: ', list);
  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">{/* Label */} List 2</h3>
      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list2-element">
        {/* Each element in a list */}
        {list.map((e) => {
          return `${e} `;
        })}
      </div>

      <input
        data-testid="list2-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        data-testid="list2-btn-append-end"
        onClick={() => {
          appendEnd(Number(input));
          setInput('');
        }}
      >
        {/* Button to append new number to the end of the list */}
        appendEnd
      </button>
      <button
        data-testid="list2-btn-pop-start"
        onClick={() => {
          popEnd();
          setInput('');
        }}
      >
        {/* Button to  pop first element of the list */}
        popStart
      </button>
      <button data-testid="list2-btn-clear" onClick={() => clear()}>
        {/* Button to  clear the list */}
        clear
      </button>
      <button
        data-testid="list2-btn-reset"
        onClick={() => reset(initialValues)}
      >
        {/* Button to  reset the list to initialValue */}
        reset
      </button>
    </div>
  );
};

export default React.memo(List2);
