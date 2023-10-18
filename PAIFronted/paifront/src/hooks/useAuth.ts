import {IUser} from "../models/user";

export interface UserContextProvider{
    userData: IUser
    isLogged: boolean
    login: ()  => void
    logout: () => void
}