import { CalcService } from './calc.service';
import { CalcDto } from './calc.dto';
export declare class CalcController {
    private readonly calcService;
    constructor(calcService: CalcService);
    calc(calcBody: CalcDto): string | {
        result: any;
    };
}
