import Icon from "../../components/ui/Icon/Icon";

function ChevronDownIcon({ className = "" }) {
  return (
    <Icon className={className}>
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Icon>
  );
}

export default ChevronDownIcon;