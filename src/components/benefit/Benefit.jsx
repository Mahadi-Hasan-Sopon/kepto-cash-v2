/* eslint-disable react/prop-types */
function Benefit({ icon, h4, p, className }) {
  return (
    <div className={`${className ? className : ''} benefit flex gap-8 items-center`}>
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <div className="content">
        <h4 className="text-2xl font-semibold text-blackColor">{h4}</h4>
        <p className="text-base font-normal text-primaryColor">{p}</p>
      </div>
    </div>
  );
}

export default Benefit;
