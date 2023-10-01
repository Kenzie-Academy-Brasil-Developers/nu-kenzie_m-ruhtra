export const Input = ({ label, id, type, placeholder, value, setValue }) => {
  return (
    <div>
      <label className="textForm caption" htmlFor={id}>{label}</label>
      <input
        className="textForm headline"
        name={id}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
    </div>
  )
};
