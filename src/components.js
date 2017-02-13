if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.')
}

AFRAME.registerComponent('time-counter', {
    schema: {},
    init: function () {
        this.data.count = 0
    },
    tick: function () {
        this.data.count += 1
        this.el.setAttribute('material', 'time', this.data.count * 0.01)
    }
})

