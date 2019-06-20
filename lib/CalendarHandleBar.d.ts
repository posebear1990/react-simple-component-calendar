/// <reference types="react" />
export interface Props {
    date: Date;
    onChange: (date: Date) => void;
}
export default function CalendarHandleBar({ date, onChange }: Props): JSX.Element;
