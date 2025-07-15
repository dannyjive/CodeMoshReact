interface Props {
  classProp: string;
  namea: string;
  onClick: () => void;
}

const Button = ({ classProp, namea, onClick }: Props) => {
  return (
    <>
      <button type="button" className={classProp} onClick={onClick} key={namea}>
        {namea}
      </button>
    </>
  );
};

export default Button;
