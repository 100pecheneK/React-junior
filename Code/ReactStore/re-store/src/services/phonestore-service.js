export default class PhoneStoreService {
    _data = [
        {
            id: 1,
            title: 'iPhone 00',
            price: 100,
            image: 'img'
        },
        {
            id: 2,
            title: 'iPhone 11',
            price: 11,
            image: 'img'
        },
    ]

    getPhones() {
        return new Promise(((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.9) {
                    reject(new Error('Error!!!!'))
                } else {
                    resolve(this._data)
                }
            }, 700)
        }))
    }
}