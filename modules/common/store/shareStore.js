import { action, observable } from 'mobx'

export class ShareStore extends BaseStore {
    @observable state = {
        message: 'msg'
    }
}
