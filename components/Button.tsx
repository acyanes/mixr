interface IProps {
  text?: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: IProps) => {
  return (
    <div>
      <button className='bg-gray-200 m-2 p-2' onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
