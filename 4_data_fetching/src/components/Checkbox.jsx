'use client'

const Checkbox = ({ checked }) => {
  return (
    <input
      type="checkbox"
      className="form-checkbox w-5 h-5"
      checked={checked}
      onChange={(e) => e.target.form.requestSubmit()}
    />
  )
}

export default Checkbox
