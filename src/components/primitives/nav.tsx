import React from "react";

const Nav = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => <nav ref={ref} {...props} />);

export default Nav;
