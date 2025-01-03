import {LastResult} from "./last_result.ts";

export type Team = {
    id: number
    name: string
    region: string
    rating: number
    countryCode: string
    eloProgression: number
    gameCount: number
    winsCount: number
    drawCount: number
    lossCount: number
    lastResults: Array<LastResult>
}