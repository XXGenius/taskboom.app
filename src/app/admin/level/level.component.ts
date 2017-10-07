import {Component, OnInit, Input, ViewChild, Inject} from '@angular/core';
import {ISubscription} from 'rxjs/Subscription';
import {ApiService} from '../../services/api.service';
import {DOCUMENT} from '@angular/common';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-level',
    templateUrl: './level.component.html',
    animations: [
        trigger('list', [
            state('in', style({
                opacity: 1,
                transform: 'translateX(0)'
            })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100px)'
                }),
                animate(300)
            ]),
            transition('* => void', [
                animate(300, style({
                    opacity: 0,
                    transform: 'translateX(100px)'
                }))
            ]),
        ])
    ]
})
export class LevelComponent implements OnInit {
    @ViewChild('inputCreate') inputCreate;
    @ViewChild('inputCreate') inputCreateExp;
    levels = [];
    edit;
    private levelsSubscription: ISubscription;

    constructor(private apiService: ApiService,
                @Inject(DOCUMENT) private doc: Document, ) {
        this.levelsSubscription = this.apiService.getLevels().subscribe(
            (levels) => {
                console.log(levels);
                this.levels = levels;
            }
        );
    }
    ngOnInit() {
    }

    remove(i: number) {
        const id = this.levels[i].id;
        if (confirm('Are you sure to delete: ' + this.levels[i].level)) {
            this.apiService.deleteLevel(id)
                .subscribe(
                    (level) => {
                        console.log(level);
                    }
                );
            this.levels = this.levels.filter( level => level.id !== id);
        }
    }

    showUpdate(i) {
        this.levels[i].edit = true;
    }

    create(level: number, exp: number) {
        this.inputCreate = '';
        this.inputCreateExp = '';
        this.apiService.createLevel(level, exp).subscribe(
            (lvl) => {
                console.log(lvl);
                this.levels.push({id: lvl.id, exp: lvl.exp, level: lvl.level});
            }
        );
    }

    cancel(i: number) {
        const id = this.levels[i].id;
        (<HTMLInputElement>this.doc.getElementById('input-title-' + id)).value = this.levels[i].level;
        this.levels[i].edit = false;
    }

    update(i: number) {
        const id = this.levels[i].id;
        const level = (<HTMLInputElement>this.doc.getElementById('input-level-' + id)).value;
        const exp = (<HTMLInputElement>this.doc.getElementById('input-exp-' + id)).value;

        this.levels[i].level = null;
        this.levels[i].exp =  null;
        this.apiService.updateLevel(id, level, exp).subscribe(
            (role) => {
                this.levels[i].exp = exp;
                this.levels[i].level = level;
                this.levels[i].edit = false;
            }
        );
    }

    // createLevel(level: number, exp: number) {
    //     this.apiService.createLevel(level, exp).subscribe(
    //         (lvl) => {
    //             console.log(lvl);
    //             this.levels.push({id: lvl.id, exp: lvl.exp, level: lvl.level});
    //         }
    //     );
    // }

}
