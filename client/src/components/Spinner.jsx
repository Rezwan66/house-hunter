const Spinner = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="w-16 h-16 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-teal-400 border-t-teal-700"></div>
      </div>
    </>
  );
};
export default Spinner;
