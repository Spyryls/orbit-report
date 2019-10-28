export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    shouldShowWarning(): boolean {
        return this.type.toLowerCase() === "space debris";
        //  if (this.type === "space debris") {
        //     return true;
        // } else {
        //     return false;
        // }
    }

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }
}