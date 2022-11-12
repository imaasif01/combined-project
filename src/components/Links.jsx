import React from "react";

const Links = ({ href, children, className }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a
      onClick={onClick}
      className={className}
      href={href}
      children={children}
    ></a>
  );
};

export default Links;
