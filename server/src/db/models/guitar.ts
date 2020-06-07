import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface GuitarAttributes {
  id: number;
  make: string;
  model: string;
  year: number;
  condition?: string;
}
export interface GuitarModel
  extends Model<GuitarAttributes>,
    GuitarAttributes {}
export class Guitar extends Model<GuitarModel, GuitarAttributes> {}

export type GuitarStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): GuitarModel;
};

export function GuitarFactory(sequelize: Sequelize): GuitarStatic {
  return <GuitarStatic>sequelize.define('Guitar', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
  });
}
