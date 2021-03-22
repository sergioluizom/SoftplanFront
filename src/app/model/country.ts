import { Entity } from "./entity";
import { OfficialLanguage } from "./officiallanguage";

export class Country extends Entity{
name: string;
area : number | null;
population : number | null;
capital: string;
officialLanguages: OfficialLanguage [];
address: string;
version : Version;
}

export enum Version {
    V1 = 1,
    V2 = 2
}