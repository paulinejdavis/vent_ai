import "./toggleSlider.css";

export const ToggleSlider = ({ onToggle }) => {
  return (
    <label className="switch">
      <input type="checkbox" onChange={onToggle} />
      <span className="slider round"></span>
    </label>
  );
};
