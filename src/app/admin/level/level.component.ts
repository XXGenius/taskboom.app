import { Component, OnInit, Input } from '@angular/core';
import {ISubscription} from 'rxjs/Subscription';
import {ApiService} from '../../services/api.service';

@Component({
    selector: 'app-level',
    templateUrl: './level.component.html'
})
export class LevelComponent implements OnInit {
    @Input() level;
    levels;
    private levelsSubscription: ISubscription;
    constructor(private apiService: ApiService) {
        this.levelsSubscription = this.apiService.getLevels().subscribe(
            (levels) => {
                console.log(levels);
                this.levels = levels;
            }
        );
    }
    ngOnInit() {
    }

    deleteLevel(id: number) {
        this.apiService.deleteLevel(id)
            .subscribe(
                (level) => {
                    console.log(level);
                }
            );
        this.levels = this.levels.filter( level => level.id !== id);
    }

    updateLevel(id: number) {
    }

    createLevel(level: number, exp: number) {
        this.apiService.createLevel(level, exp).subscribe(
            (lvl) => {
                console.log(lvl);
                this.levels.push({id: lvl.id, exp: lvl.exp, level: lvl.level});
            }
        );
    }

}
