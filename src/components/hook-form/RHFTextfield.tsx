import { Controller, useFormContext } from "react-hook-form";



const RHFTextfield = ({ name, type, placeholder, label, textColor = "text-gray-900", bgInput = "bg-gray-50", ...className }: { name: string, type: string, placeholder: string, label: string, textColor?: string, bgInput?: string, className?: any }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const error = errors[name] ? true : false
  const errorMessage: any = error ? errors[name]?.message : "";

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (

        <div {...className}>
          <label
            htmlFor={name}
            className={`block mb-2 text-sm font-medium ${textColor} dark:text-white`}
          >
            {label}
          </label>
          <input
            {...field}
            type={type}
            name={name}
            id={name}
            className={`${bgInput} border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder={placeholder}
          />

          {error && (
            <p className="text-red-500 mt-1  text-[12px]">
              {errorMessage}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default RHFTextfield;
