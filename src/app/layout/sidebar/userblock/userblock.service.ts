import { Injectable } from '@angular/core';

@Injectable()
export class UserblockService {
    private userBlockVisible:boolean = false;
    constructor() {
        // initially visible
        this.userBlockVisible  = true;
    }

    getVisibility() {
        return this.userBlockVisible;
    }

    setVisibility(stat = true) {
        this.userBlockVisible = stat;
    }

    toggleVisibility() {
        this.userBlockVisible = !this.userBlockVisible;
    }

}
