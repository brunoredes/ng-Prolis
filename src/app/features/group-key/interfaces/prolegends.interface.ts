export interface ProlegendsGameList {
  player: string;
  game1: number | string;
  game2: number | string;
  result: number
}

export interface ProlegendsKeyGroup {
  keyName: string;
  gameInfoList: ProlegendsGameList[],
}

export interface TableHeaderInformation extends Modify<ProlegendsGameList, { game1: { title: string, image: string }, game2: { title: string, image: string }, result: string }> { }


type Modify<T, R> = Omit<T, keyof R> & R;
