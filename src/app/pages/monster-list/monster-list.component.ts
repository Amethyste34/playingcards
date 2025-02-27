import { CommonModule } from '@angular/common';
import { Component, computed, signal, model, inject } from '@angular/core';
import { PlayingCardComponent } from "../../components/playing-card/playing-card.component";
import { Monster } from '../../models/monster.model';
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { MonsterService } from '../../services/monster/monster.service';

@Component({
  selector: 'app-monster-list',
  standalone: true,
  imports: [CommonModule, PlayingCardComponent, SearchBarComponent],
  templateUrl: './monster-list.component.html',
  styleUrl: './monster-list.component.css'
})
export class MonsterListComponent {

  MonsterService = inject(MonsterService);
  
  monsters = signal<Monster[]>([]);
  search = model('');

  filteredMonsters = computed(() => {
    return this.monsters().filter(monster => monster.name.includes(this.search()));
  })

  constructor() {
    this.monsters.set(this.MonsterService.getAll());
  }

  addMonster() {
    const genericMonster = new Monster();
    this.MonsterService.add(genericMonster);
    this.monsters.set(this.MonsterService.getAll());
  }
}
