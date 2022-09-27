import { useState } from 'react';

const useNumberList = (initialArray: number[]) => {
  // TODO
  const [list, setList] = useState<number[]>(initialArray);

  const appendStart = (e: number) => {
    list.unshift(e);
    setList(list);
  };

  const appendEnd = (e: number) => {
    list.push(e);
    setList(list);
  };
  const popStart = () => {
    list.shift();
    setList([...list]);
  };
  const popEnd = () => {
    list.pop();
    setList([...list]);
  };
  const clear = () => {
    setList([]);
  };
  const reset = (e: number[]) => {
    setList(initialArray);
  };
  console.log(list);
  
  // refer readme.md for what to return
  return { list, appendStart, appendEnd, popStart, popEnd, clear, reset };
};

export default useNumberList;

// return {
//   list: /** List of numbers */,
//   appendStart: /** Function to append element at start */,
//   appendEnd: /** Function to append element at end of list */,
//   popStart: /** Function to pop element at start of list */,
//   popEnd: /** Function to pop element at the end of list */,
//   clear: /** Function to clear the list and set it to empty */,
//   reset: /** Function to reset list values to the original values */
// };
