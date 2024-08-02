import axios from "axios";
import { MapRelationData } from "./models";

export const getMapRelation = (
  relation: string,
): Promise<{ data: MapRelationData }> => {
  return axios.get(
    `https://overpass-api.de/api/interpreter?data=[out:json];relation(${relation});out%20geom;`,
  );
};
