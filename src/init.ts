interface initParam {
    token?: string;
}

interface globalFunc extends initParam {
    get: (e: string) => void;
    set: (e: string, v: any) => void;
    watch: (e: string) => void;
    back: (e: string, n: string, c: void) => void;
    removeBack: (e: string, n: string) => void;
    [key: string]: any;
}

class globalData implements globalFunc {
    public token = ''

    get = (key) => {
        try {
            return this[key]
        } catch (e) {
            throw new Error(`globalData: 未定义 ${key} 字段`)
        }
    }

    set = (key, value) => {
        if (
            this.hasOwnProperty(key) &&
            (!this.hasOwnProperty(`${key}_old`) || JSON.stringify(value) != JSON.stringify(this[`${key}_old`]))
        ) {
            this[`${key}_old`] = JSON.parse(JSON.stringify(this[key]))
            this[key] = value
            this.hasOwnProperty(`${key}_callback`) && this.watch(key)
        }
    }

    watch = (key) => {
        Object.keys(this[`${key}_callback`]).map((item: any) => {
            item && item(this[key], this[`${key}_old`])
        })
    }

    back = (key, callbackName, callback) => {
        if (this.hasOwnProperty(key)) {
            const cb_key = `${key}_callback`
            const cb_obj = {[callbackName] : callback}
            this[cb_key] = this.hasOwnProperty(cb_key) ? { ...this[cb_key], cb_obj } : cb_obj
        }
    }

    removeBack = (key, callbackName) => {
        if (this.hasOwnProperty(key)) {
            try {
                delete this[`${key}_callback`][callbackName]
            } catch (e) {
                throw new Error(`globalData: 所移除的 ${key} 字段中未绑定过 ${callbackName}`)
            }
        } else {
            throw new Error(`globalData: 未定义 ${key} 字段`)
        }
    }
}

export const global = new globalData()

export const init = (param: initParam) => {
    Object.keys(param).forEach((key) => {
        global.set(key, param[key])
    })
}
