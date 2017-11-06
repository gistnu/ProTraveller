var Item = /** @class */ (function () {
    function Item(fields) {
        this.fields = fields;
        for (var f in fields) {
            this[f] = fields[f];
        }
    }
    return Item;
}());
export { Item };
//# sourceMappingURL=item.js.map