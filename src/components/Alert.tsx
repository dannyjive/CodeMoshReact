import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  vis: string;
  onClick: () => void;
}

const Alert = ({ vis, children, onClick }: Props) => {
  return (
<div className={`alert alert-primary alert-dismissible fade ${vis}`} role="alert">
  {children}
  <button type="button" className="close" data-dismiss="alert" onClick={onClick}aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  );
};

export default Alert;
