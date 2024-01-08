const SvgComponent = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="33"
      viewBox="0 0 50 33"
      {...props}
    >
      <path fill="#bdbdbd" d="M0,0V5H50V0H0ZM0,14v5H50V14H0ZM0,28v5H50V28H0Z" />
    </svg>
  );
};

export default SvgComponent;
