import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class HeaderService {
  isHomePage = new BehaviorSubject(false);
  constructor() {}
}
