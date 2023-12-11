import { PatternFormat } from 'react-number-format';
import { Controller, useFormContext, FieldValues } from 'react-hook-form';

export const RHFPhone = ({ label, textColor = "text-gray-900", bgInput = "bg-gray-50", ...className }: { label: string, textColor?: string, bgInput?: string, className?: string }) => {
  const { control, formState: { errors }, } = useFormContext<FieldValues>();
  const error = errors.tel ? true : false
  const errorMessage: any = error ? errors.tel?.message : "";
  return (
    <Controller
      control={control}
      name="tel"
      render={({ field: { onChange, name, value } }) => {
        return (
          <div {...className}>
            <label
              htmlFor='tel'
              className={`block mb-2 text-sm font-medium ${textColor} dark:text-white`}
            >
              {label}
            </label>
            <PatternFormat
              format="+998 ## ### ####"
              allowEmptyFormatting
              mask="_"
              name={name}
              value={value}
              id='tel'
              onChange={onChange}
              className={`${bgInput} border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}

            />
            {error && (
              <p className="text-red-500 mt-1  text-[12px]">
                {errorMessage}
              </p>
            )}
          </div>

        )
      }}
    />
  );
};
