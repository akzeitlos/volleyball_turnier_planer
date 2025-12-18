import GearIcon from "../../icons/GearIcon";
import GroupsIcon from "../../icons/GroupsIcon";
import MatchesIcon from "../../icons/MatchesIcon";
import TrophyIcon from "../../icons/TrophyIcon";
import TableIcon from "../../icons/TableIcon";

export default function BottomRail({
  step,
  setStep,
  groups,
  placement,
  openGroupMatches,
  openPlacementMatches,
  allPlacementMatchesComplete,
}) {
  const groupBadge = groups.length ? null : "!";
  const matchesBadge = groups.length
    ? openGroupMatches
      ? String(openGroupMatches)
      : null
    : "!";
  const placementBadge = placement
    ? openPlacementMatches
      ? String(openPlacementMatches)
      : null
    : null;

  const items = [
    { key: "setup", label: "Setup", icon: GearIcon },
    { key: "groups", label: "Gruppen", icon: GroupsIcon, badge: groupBadge },
    { key: "matches", label: "Spiele", icon: MatchesIcon, badge: matchesBadge },
    { key: "placement", label: "Platz", icon: TrophyIcon, badge: placementBadge },
    { key: "final", label: "Tabelle", icon: TableIcon },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-slate-900 text-white">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-around px-2">
        {items.map(({ key, label, icon: Icon, badge }) => (
          <button
            key={key}
            onClick={() => setStep(key)}
            className={`relative flex flex-col items-center justify-center gap-0.5 px-3 text-xs
              ${step === key ? "text-white" : "text-white/60"}
            `}
          >
            <Icon className="h-6 w-6" />
            <span>{label}</span>

            {badge && (
              <span className="absolute top-1 right-2 rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] leading-none text-white">
                {badge}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
