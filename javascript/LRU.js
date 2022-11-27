class LruCache {
  constructor (limit){
    this.limit = limit
    this.cache = new Map()
  }
  set (key,val){
    if (this.cache.get(key)){
      this.cache.delete(val)
    }else if (this.cache.size >= this.limit){
      this.cache.delete(this.cache.keys().next().value)
    }
    this.cache.set(key,val)
    return val
  }
  get (key) {
    let val = this.cache.get(key)
    if (val === undefined){
      return null 
    }
    this.cache.delete(val)
    this.cache.set(key,val)
    return val
  }
}

const lruCache = new LruCache(2)
