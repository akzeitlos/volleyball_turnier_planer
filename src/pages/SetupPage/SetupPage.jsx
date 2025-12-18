import React, { useMemo, useState } from "react";
import Card from "../../components/ui/Card/Card";
import CardHeader from "../../components/ui/CardHeader/CardHeader";
import CardTitle from "../../components/ui/CardTitle/CardTitle";
import CardContent from "../../components/ui/CardContent/CardContent";
import Button from "../../components/ui/Button/Button";
import Separator from "../../components/ui/Separator/Separator";
import Badge from "../../components/ui/Badge/Badge";
import Label from "../../components/form/Label/Label";
import TeamEditor from "../../features/teams/TeamEditor";
import { Listbox } from "@headlessui/react";
import ChevronDownIcon from "../../components/icons/ChevronDownIcon";
import SelectListbox from "../../components/form/SelectListbox/SelectListbox";

export default function SetupPage({
  RULES,
  useStorage,
  setUseStorage,
  setup,
  setSetup,
  derived,
  teams,
  setTeams,
  groupsExist,
  onGenerateGroups,
  onClearAll,
  clampInt,
}) {
  const teamCountOptions = useMemo(
    () =>
      Array.from({ length: 64 - 2 + 1 }, (_, i) => {
        const value = i + 2;
        return { id: value, name: String(value), value };
      }),
    []
  );

  const groupSizeOptions = useMemo(
    () =>
      Array.from({ length: 16 - 2 + 1 }, (_, i) => {
        const value = i + 2;
        return { id: value, name: String(value), value };
      }),
    []
  );

  const selectedTeamCount =
    teamCountOptions.find((o) => o.value === setup.teamCount) ??
    teamCountOptions[0];

  const selectedGroupSize =
    groupSizeOptions.find((o) => o.value === setup.groupSize) ??
    groupSizeOptions[0];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">
          Auswahl der Teamanzahl, Gruppengröße und Teamnamen
        </CardTitle>
      </CardHeader>

      <CardContent className="grid gap-4">
        <div className="text-xs text-slate-600">
          Sieg: {RULES.points.win} Punkte, Unentschieden: {RULES.points.draw}{" "}
          Punkte, Niederlage: {RULES.points.loss} Punkte.
        </div>

        <Separator />

        <div className="grid md:grid-cols-2 gap-4">
          {/* Teams */}
          <div className="grid gap-2">
            <Label>Anzahl Teams</Label>

            <SelectListbox
              value={selectedTeamCount}
              options={teamCountOptions}
              onChange={(opt) =>
                setSetup((s) => ({
                  ...s,
                  teamCount: clampInt(opt.value, 2, 64),
                }))
              }
            />

            <div className="text-xs text-slate-600">2–64 Teams.</div>
          </div>

          {/* Group size */}
          <div className="grid gap-2">
            <Label>Gruppengröße</Label>

            <SelectListbox
              value={selectedGroupSize}
              options={groupSizeOptions}
              onChange={(opt) =>
                setSetup((s) => ({
                  ...s,
                  groupSize: clampInt(opt.value, 2, 16),
                }))
              }
            />

            <div className="text-xs text-slate-600">2–16 Teams pro Gruppe.</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">Gruppen: {derived.groupCount}</Badge>
          {derived.hasRemainder ? (
            <Badge variant="outline">letzte Gruppe kleiner</Badge>
          ) : (
            <Badge variant="outline">gleichmäßig</Badge>
          )}
        </div>

        <Separator />

        <div className="grid gap-2">
          <div className="font-semibold">Teams</div>
          <TeamEditor teams={teams} setTeams={setTeams} />
        </div>

        <div className="flex flex-wrap gap-2">
          <Button onClick={onGenerateGroups}>
            {groupsExist ? "Gruppen speichern" : "Gruppen erzeugen"}
          </Button>
          <Button variant="ghost" onClick={onClearAll}>
            Speicher leeren
          </Button>
        </div>

        {groupsExist ? (
          <div className="text-xs text-slate-600">
            Hinweis: Klick auf „Gruppen speichern“ erzeugt Gruppen & Spiele neu
            (bisherige Ergebnisse werden überschrieben).
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
