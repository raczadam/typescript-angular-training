import { Trainer } from "./Trainer";

export interface Coach extends Trainer {

    getDailyWorkout(): string;

}