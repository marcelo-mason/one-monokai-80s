/**
 * MicroEvent - to make any js object an event emitter
 * @param {object} the object which will support MicroEvent
 */

MicroEvent.prototype = {
  trigger: function (event /* , args... */) {
    this._events = this._events || {}
    if (event in this._events === false) return
    for (var i = 0; i < this._events[event].length; i++) {
      this._events[event][i].apply(
        this,
        Array.prototype.slice.call(arguments, 1)
      )
    }
  },
}

MicroEvent.prototype.mixin = function (destObject) {
  var props = ["on", "off", "trigger"]
  for (var i = 0; i < props.length; i++) {
    destObject.prototype[props[i]] = MicroEvent.prototype[props[i]]
  }
}
