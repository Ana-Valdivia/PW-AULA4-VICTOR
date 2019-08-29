"use strict";
exports.__esModule = true;
var Viagem = /** @class */ (function () {
    function Viagem(tempogasto, velomedia, rendimento) {
        this.tempogasto = tempogasto;
        this.velomedia = velomedia;
        this.rendimento = rendimento;
    }
    Viagem.prototype.distancia = function () {
        return (this.tempogasto * this.velomedia);
    };
    ;
    Viagem.prototype.consumo = function () {
        return (this.distancia() / this.rendimento);
    };
    ;
    return Viagem;
}());
exports.Viagem = Viagem;
