import React, { FC, HTMLProps } from "react";

interface Props {
  onPress?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: FC<Props & HTMLProps<HTMLButtonElement>> = ({
  onPress,
  children
}) => {
  return <button onClick={onPress}>{children}</button>;
};

export default Button;
