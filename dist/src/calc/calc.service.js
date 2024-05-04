"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcService = void 0;
const common_1 = require("@nestjs/common");
let CalcService = class CalcService {
    calculateExpression(calcBody) {
        const { expression } = calcBody;
        function isDigit(char) {
            return char >= '0' && char <= '9';
        }
        function isOperator(char) {
            return ['+', '-', '*', '/'].includes(char);
        }
        let expressionEvaluation = [];
        let currentValue = '';
        for (let i = 0; i < expression.length; i++) {
            let char = expression[i];
            if (isDigit(char) || char === '.') {
                currentValue += char;
            }
            else if (isOperator(char)) {
                if (currentValue !== '') {
                    expressionEvaluation.push(parseFloat(currentValue));
                    currentValue = '';
                }
                expressionEvaluation.push(char);
            }
            else if (char !== ' ') {
                return "Invalid character: " + char;
            }
        }
        if (currentValue !== '') {
            expressionEvaluation.push(parseFloat(currentValue));
        }
        if (expressionEvaluation.length === 0 || isOperator(expressionEvaluation[0]) || isOperator(expressionEvaluation[expressionEvaluation.length - 1])) {
            throw new common_1.HttpException({
                statusCode: 400,
                message: "Invalid expression provided",
                error: "Bad Request"
            }, common_1.HttpStatus.BAD_REQUEST);
        }
        let result = expressionEvaluation[0];
        for (let i = 1; i < expressionEvaluation.length; i += 2) {
            let operator = expressionEvaluation[i];
            let operand = expressionEvaluation[i + 1];
            switch (operator) {
                case '+':
                    result += operand;
                    break;
                case '-':
                    result -= operand;
                    break;
                case '*':
                    result *= operand;
                    break;
                case '/':
                    if (operand === 0) {
                        return "Division by zero error";
                    }
                    result /= operand;
                    break;
                default:
                    return "Invalid operator";
            }
        }
        return { result };
    }
};
CalcService = __decorate([
    (0, common_1.Injectable)()
], CalcService);
exports.CalcService = CalcService;
//# sourceMappingURL=calc.service.js.map