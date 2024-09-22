import "./hero.css";

const Generation = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img src="{logo}" alt="" />
      <h3 className="woody-curvy">QuBytes</h3>
    </div>
  );
};

export default Generation;
