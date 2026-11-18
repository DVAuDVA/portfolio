import type { UserDataType } from "../types/user/user";

export function UserCard(props: { user: UserDataType }) {
    const { user } = props;
    return <article>{user.username}</article>;
}