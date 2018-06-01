import axios from 'axios'

export default {
	getShopMsg(cb) {
		axios.get("http://localhost:8080/src/mock/data.json").then((res) => {
			if(res.status >= 200 && res.status <300){
                    cb(res)
            }
		})
	}
}