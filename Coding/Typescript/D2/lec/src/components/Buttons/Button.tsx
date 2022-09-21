import React from 'react'

type ButtonProps={
    children:string;
    color?:'red'|'green'|'blue';
    size?: 'xs'|'lg'|'md'|'sm';
    variant?:'solid'|'ghost'|'outline'|'link';
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
const Buttons=({
  children,
  size='sm',
  variant="solid",
  color="green",
  leftIcon,
  rightIcon,
}:ButtonProps)=>{
  const getSize=(size: 'xs'|'lg'|'md'|'sm')=>{
    return {fontSize:'20px',padding:'10px'}
  };
}
const Button = () => {
  return (
    <div>Button</div>
  )
}

export default Button