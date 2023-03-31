export const AlertMixin = {
    data() {
        return {
            show: false,
            msg: null,
            type: null
        }
    },
    methods: {
        showAlert(show, msg, type)
        {
            this.show = show,
            this.msg = msg,
            this.type = type
        },
        getAlertShow()
        {
            return this.show
        },
        getAlertMsg()
        {
            return this.msg
        },
        getAlertType()
        {
            return this.type
        }
    }
}