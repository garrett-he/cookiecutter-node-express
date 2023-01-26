import UserEntity from "../entities/user.entity";

export class UserService
{
    public async findAllUsers(): Promise<UserEntity[]>
    {
        return UserEntity.findAll();
    }

    public async addUser(user: UserEntity)
    {
        await UserEntity.create(user);
    }

    public async updateUser(id: string, user: UserEntity)
    {
        await UserEntity.update(user, {where: {id}});
    }

    public async deleteUser(id: string)
    {
        await UserEntity.destroy({where: {id}});
    }
}
