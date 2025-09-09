"use client";

import Image from "next/image";

import { FixtureData } from "@/types/fixture";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { TypographyMuted, TypographySmall } from "@/components/ui/typography";

export const columns: ColumnDef<FixtureData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorFn: (row) => `${row.teams.home.name}-${row.teams.away.name}`,
    accessorKey: "partidas",
    header: () => <div className="px-1">Partidas</div>,
    cell: ({ row }) => {
      const { fixture, teams, goals } = row.original;
      return (
        <div
          className="flex justify-between items-center cursor-pointer px-1"
          onClick={() => alert("Clicou na div!")}
        >
          <div className="flex items-center space-x-4">
            <div className="flex flex-col text-center space-y-1">
              <TypographyMuted>
                {new Date(fixture.date).toLocaleTimeString("pt-BR", {
                  timeStyle: "short",
                })}
              </TypographyMuted>
              <span className="text-xs">{fixture.status.short}</span>
            </div>
            <Separator orientation="vertical" className="min-h-12" />
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Image
                    src={teams.home.logo}
                    alt={`Logo do ${teams.home.name}`}
                    width={24}
                    height={24}
                    style={{ width: "24px", height: "24px" }}
                  />
                  <TypographySmall>{teams.home.name}</TypographySmall>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Image
                    src={teams.away.logo}
                    alt={`Logo do ${teams.away.name}`}
                    width={24}
                    height={24}
                    style={{ width: "24px", height: "24px" }}
                  />
                  <TypographySmall>{teams.away.name}</TypographySmall>
                </div>
              </div>
            </div>
          </div>
          {goals.home !== null && goals.away !== null && (
            <div className="flex flex-col space-y-2">
              <span>{goals.home}</span>
              <span>{goals.away}</span>
            </div>
          )}
        </div>
      );
    },
  },
];
