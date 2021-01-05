const Route = ({ Path, children }) => {
  return window.location.pathname === Path ? children : null;
};

export default Route;
