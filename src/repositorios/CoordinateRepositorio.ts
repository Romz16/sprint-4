import { EntityRepository, Repository } from "typeorm";
import { Coordinate} from "../entities/Coordinates";

@EntityRepository(Coordinate)

class CoordinateRepositorios extends Repository<Coordinate>{}

export {CoordinateRepositorios}


