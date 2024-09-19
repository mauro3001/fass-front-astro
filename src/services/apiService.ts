import type { UserModel } from "../models/fassModel";

export const getUserByUserName = async (username: string): Promise<UserModel | null> => {
    const res = await fetch(`https://fassbackend.onrender.com/fass?nameFilter=${username}`);
    const data = await res.json();

    if (data.length === 0) {
        console.warn("Usuario no encontrado");
        return null;
    }
    return data[0];
};

export const getAllUsers = async (): Promise<UserModel[] | null> => {
    const res = await fetch("https://fassbackend.onrender.com/fass");
    return await res.json();
};
