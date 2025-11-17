import styles from "./Button.module.css";

interface Props {
  color?: "primary" | "secondary" | "danger";
  children: string;
  onClick: () => void;
}

const Button = ({ color = "primary", children, onClick }: Props) => {
  return (
    <>
      <button
        type="button"
        className={[styles.btn]}
        onClick={onClick}
        key={children}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
