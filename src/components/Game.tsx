interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}
