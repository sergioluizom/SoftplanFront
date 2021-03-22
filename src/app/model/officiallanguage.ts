import { Entity } from "./entity";

export class OfficialLanguage extends Entity{
    iso639_1 : string;
    iso639_2 : string;
    name: string;
    nativeName : string;
    countryId : string;
}