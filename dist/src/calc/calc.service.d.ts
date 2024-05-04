import { CalcDto } from './calc.dto';
export declare class CalcService {
    calculateExpression(calcBody: CalcDto): string | {
        result: any;
    };
}
