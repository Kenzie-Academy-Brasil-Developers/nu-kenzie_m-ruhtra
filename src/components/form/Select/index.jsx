export const Select = ({ label, id, value, setValue, children }) => {
  return (
    <div>
      <label className="textForm caption" htmlFor={id}>{label}</label>
      <select
        name={id}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {children}
      </select>
    </div>
  )
};
