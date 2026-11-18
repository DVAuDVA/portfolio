import { useState, type ChangeEvent } from "react";
import { usersData as polzaki } from "../data/users";
import type { UserDataType } from "../types/user/user";

export function Header() {
    const [count, setCount] = useState<number>(0);
    const [users, _] = useState<UserDataType[]>(polzaki);
    const [isShow, setIsShow] = useState(false);
    const [login, setLogin] = useState('');
    const [city, setCity] = useState('')


    function decrement() {
        setCount(с => с + 1)
    }

    function visibleList() {
        setIsShow(prev => !prev);
    }

    const textBtn = isShow ? 'Скрыть' : 'Вскрыть';

    function getValue(event: ChangeEvent<HTMLInputElement>): void {
        setLogin(event.target.value);
    }

    function checkCity() {
        switch (city) {
            case 'abas':
                return 'Абасгороде';
            case 'sumk':
                return 'Сумкарии';
            case 'cock':
                return 'Кокшетау';
            case 'chry':
                return 'Крусадии';
            default:
                break;
        }
    }

    return (
        <header>
            <h1>{count}</h1>
            <h2>{login}</h2>
            {city && <p>Я прописан в {checkCity()}.</p>};
            <input
                value={login}
                onChange={e => getValue(e)}
                type="text"
                placeholder="login"
            />

            <select name="city" onChange={event => setCity(event.target.value)}>
                <option value="">Обители</option>
                <option value="abas">Абасгород</option>
                <option value="sumk">Сумкария</option>
                <option value="cock">Кокшетау</option>
                <option value="chry">Крусадия</option>
            </select>

            <button onClick={decrement}>+1</button>

            <button onClick={visibleList}>{textBtn}</button>
        
            {isShow && (
                <div>
                    {users.map(u => (
                        <article key={u.id}>{u.username}</article>
                    ))}
                </div>
            )}
        </header>
    );
}