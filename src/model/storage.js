
var storage = {
  set(key,value){ //增加
    // console.log(3,value);
    localStorage.setItem(key,JSON.stringify(value));
  },
  get(key){ // 获取
    // console.log('huoquhuoqu',key);
    return JSON.parse(localStorage.getItem(key));
  },
  remove(key){ // 
   localStorage.removeItem(key);
  }
}

export default storage;