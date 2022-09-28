Function.prototype.myBind = function(context) {
    return () => {
        return this.apply(context);
    }
}