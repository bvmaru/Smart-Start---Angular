export interface TodoItem{
    text: string;
    check: boolean;
}

export const TODO_ITEMS: TodoItem[] = [
{text: 'Zjeść śniadanie',check: false},
{text: 'Nakarmić kota',check: false},
{text: 'Wypić piwko',check: true},
{text: 'Wychillkować',check: false}
];