import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn:'root'
})
export class PositionService {
    constructor(private http:HttpClient){

    }
    fetch(categoryId:string):Observable<Position[]>{
        return this.http.get<Position[]>(`/api/position/${categoryId}`)
    }
}
