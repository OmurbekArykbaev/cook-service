import React, { FC } from "react"

interface ICustonInputProps {
  labelTitle: string
  labelFor: string
  inputName: string
  inputType: string
  cssStyle?: string
  value: string
  handleChange: React.ChangeEventHandler<HTMLInputElement>
  handleBlur: React.FocusEventHandler<HTMLInputElement>
  error?: string | undefined
}

const CustomInput: FC<ICustonInputProps> = ({
  labelFor,
  labelTitle,
  inputName,
  inputType,
  cssStyle = "",
  handleBlur,
  handleChange,
  value,
  error,
}) => {
  return (
    <div className={`flex flex-col space-y-2 ${cssStyle}`}>
      <label className="text-sm text-textGray" htmlFor={labelFor}>
        {labelTitle}
      </label>
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        className="input-items-address"
        type={inputType}
        name={inputName}
      />
      {error && <p className="text-red-500 text-[12px]">{error}</p>}
    </div>
  )
}

export default CustomInput
