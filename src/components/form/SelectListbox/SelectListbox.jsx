import { Listbox } from "@headlessui/react";
import ChevronDownIcon from "../../../components/icons/ChevronDownIcon";

export default function SelectListbox({
  value,
  onChange,
  options,
  getLabel = (o) => o?.name ?? "",
  className = "",
  buttonClassName = "",
  optionsClassName = "",
}) {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className={`relative ${className}`}>
        <Listbox.Button
          className={`
            relative w-full cursor-pointer rounded-md border
            bg-white px-3 py-2 pr-10 text-left
            focus:outline-none focus:ring-2 focus:ring-(--blue)
            ${buttonClassName}
          `}
        >
          {({ open }) => (
            <>
              <span className="block truncate">{getLabel(value)}</span>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <ChevronDownIcon
                  className={`
                    h-4 w-4 text-slate-400
                    transition-transform duration-200 ease-out
                    ${open ? "rotate-180" : ""}
                  `}
                />
              </span>
            </>
          )}
        </Listbox.Button>

        <Listbox.Options
          className={`
            absolute z-10 mt-1 max-h-60 w-full overflow-auto
            rounded-md border bg-white shadow-lg
            ${optionsClassName}
          `}
        >
          {options.map((opt) => (
            <Listbox.Option
              key={opt.id ?? opt.value ?? opt}
              value={opt}
              className={({ active }) =>
                `cursor-pointer px-3 py-2 ${
                  active ? "bg-(--blue) text-white" : "text-slate-900"
                }`
              }
            >
              {getLabel(opt)}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
