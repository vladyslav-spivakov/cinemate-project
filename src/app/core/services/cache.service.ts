import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CacheService {

    getCached(cacheKey : string){
        let data = sessionStorage.getItem(cacheKey);
        if(data === 'null') return null;
        return data;
    }

    setCached(cacheKey:string, cacheData : string) {
        sessionStorage.setItem(cacheKey,cacheData);
    }

    
}