import System from "../system.js";
import { Op } from "sequelize";
import UserDto from "../dtos/userDto.js";
import { Users_DB } from "../database/index.js";
import ApiError from "../ApiError.js";

export default class UserService {
    static async Register(login, password, email, is_admin) {
        try {
            const DB_Result = await Users_DB.create({ login, password, email, is_admin });
            if (DB_Result === null) return ApiError.badRequest("Ошибка при создании аккауна.");
            return new UserDto(DB_Result);
        } catch (err) {
            System.error('UserService [AuthorizeMe] error: ' + err);
            return ApiError.badRequest("Ошибка при создании аккауна.");
        }
    }

    static async Authorize(login, password) {
        try {
            const DB_Result = await Users_DB.findOne({ where: { login, password } });
            if (DB_Result === null) return ApiError.badRequest("Логин или пароль не верные.");
            return new UserDto(DB_Result);
        } catch (err) {
            System.error('UserService [AuthorizeMe] error: ' + err);
            return ApiError.badRequest("Ошибка при авторизации.");
        }
    }
}