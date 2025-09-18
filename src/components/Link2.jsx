import { useNavigate } from "react-router-dom";

export function Link2({ to, children, ...props }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      {...props}
    >
      {children}
    </button>
  );
}
