import type { bookType, userType } from "./types";

export function greet(user: userType, book: bookType): string {
    const userAge = user.age ? user.age : 14;
    return 'Меня зовут ' +user.name+ '. Мне ' +userAge+ ' лет. Недавно я читал ' +book.title + '.';
}