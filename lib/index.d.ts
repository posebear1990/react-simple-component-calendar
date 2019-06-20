/// <reference types="react" />
export interface ListItem {
    time: number;
    className?: string;
}
export interface Props {
    list: Array<ListItem>;
    now: number;
    onClick: (date: Date, item: ListItem) => void;
}
export default function Calendar({ list, now, onClick }: Props): JSX.Element;
