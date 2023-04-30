import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({tableName: "users", timestamps: false})
export default class UserEntity extends Model<UserEntity>
{
    @Column({type: DataType.STRING, primaryKey: true, allowNull: false})
    declare public id: string;

    @Column({type: DataType.STRING, allowNull: false})
    declare public name: string;
}