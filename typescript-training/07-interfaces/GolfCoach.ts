import { Coach } from "./Coach";
import { RelaxMethod } from "./RelaxMethod";

export class GolfCoach implements Coach, RelaxMethod {
    
    doingRelax(): string {
        return "just relax!";
    }

    getTrainingMethod(): string {
        return "technical";
    }

    getDailyWorkout(): string {
        return "Hit 100 balls at the golf range.";
    }

}