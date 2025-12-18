import Icon from "../../components/ui/Icon/Icon";

function ChevronUpDownIcon({ className = "" }) {
  return (
    <Icon className={className}>
      <path
        d="M6 9l6-6 6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M6 15l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Icon>
  );
}

export default ChevronUpDownIcon;