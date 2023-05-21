import { Coach } from "./Coach";

export class CricketCoach implements Coach {
    
    getTrainingMethod(): string {
        return "hard style";
    }

    getDailyWorkout(): string {
        return "Practice your spin bowling technique.";
    }
    
}