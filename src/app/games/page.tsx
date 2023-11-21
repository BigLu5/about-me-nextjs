import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games Blog",
  description: "A list of Games on my Games route.",
};

type gameSearchQuery = {
  sortBy: string;
};

type gamesType = {
  name: string;
  id: number;
};

let games: gamesType[] = [
  {
    name: "GTA V",
    id: 0,
  },
  {
    name: "Fable",
    id: 1,
  },
  {
    name: "Skyrim",
    id: 2,
  },
  {
    name: "The Sims",
    id: 3,
  },
  {
    name: "Pokemon GO",
    id: 4,
  },
  {
    name: "Zelda Ocarina of Time",
    id: 5,
  },
  {
    name: "Super Mario Odyssey",
    id: 6,
  },
  {
    name: "Pokemon Gold",
    id: 7,
  },
  {
    name: "Fortnite",
    id: 8,
  },
];

//next js 'exposes' the search Params to us (search Params being the ?query=something in URLs). We're deconstructing that and then typing it.

// this compares each object in our games array. If object a < object b, it will swap them in the array.
function compareGames(a: gamesType, b: gamesType) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
}

export default function Page({
  searchParams,
}: {
  searchParams: gameSearchQuery;
}) {
  // making a copy of the games array so we don't mutate it. (if we just use the games, it makes it impossible to 'undo' the sorting)
  let sortedGames = [...games];

  if (searchParams.sortBy == "asc") {
    games.sort(compareGames);
  } else if (searchParams.sortBy == "desc") {
    games.sort(compareGames).reverse();
  }

  return (
    <div>
      <h4>This is a list of my favourite games from throughout the years:</h4>
      <p>{searchParams.sortBy}</p>
      <br />
      <Link href="/games">Remove the sort</Link>
      <br />
      <br />
      <Link href="/games?sortBy=asc">Sort by ascending</Link>
      <br />
      <br />
      <Link href="/games?sortBy=desc">Sort by descending</Link>
      <br />
      <br />
      <br />
      {sortedGames.map((game) => {
        return (
          <div key={game.id}>
            <br />
            <Link href={`/games/${game.name.toLowerCase()}`}>{game.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
