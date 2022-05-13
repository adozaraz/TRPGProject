export enum Role {
    ADMIN,
    USER
}

export class User {
    userRole: Role = Role.USER;
    // @ts-ignore
    id: string;
    // @ts-ignore
    username: string;
    // @ts-ignore
    email: string;
}
