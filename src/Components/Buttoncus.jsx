const Buttoncus = (props) => {
  return (
    <>
      <button onClick={props.onClick} className="px-5 lg:py-2 py-2 bg-purple-600 hover:bg-purple-800 text-white rounded-lg capitalize text-lg">
        {props? props.name: null}
      </button>
    </>
  );
};

export default Buttoncus;
