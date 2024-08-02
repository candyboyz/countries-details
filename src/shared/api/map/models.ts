export interface MapRelationData {
  version: number;
  generator: string;
  osm3s: Osm3S;
  elements: Element[];
}

export interface Element {
  type: Type;
  id: number;
  bounds: Bounds;
  members: Member[];
  tags: { [key: string]: string };
}

export interface Bounds {
  minlat: number;
  minlon: number;
  maxlat: number;
  maxlon: number;
}

export interface Member {
  type: Type;
  ref: number;
  role: Role;
  lat?: number;
  lon?: number;
  geometry?: Geometry[];
}

export interface Geometry {
  lat: number;
  lon: number;
}

export enum Role {
  AdminCentre = "admin_centre",
  Inner = "inner",
  Outer = "outer",
  Subarea = "subarea",
}

export enum Type {
  Node = "node",
  Relation = "relation",
  Way = "way",
}

export interface Osm3S {
  timestamp_osm_base: Date;
  copyright: string;
}
