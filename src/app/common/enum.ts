export interface IGender {
    value: string;
    label: string;
    genderData: any;
}
export interface ITilesType {
    name: string;
    description: string;
}
export interface ITilesData {
    mostActive: ITilesType;
    visitors: ITilesType;
    anonymous: ITilesType;
}