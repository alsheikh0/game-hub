import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '288f04dffd0b474f8c44d2919842ca8a'
    }
})