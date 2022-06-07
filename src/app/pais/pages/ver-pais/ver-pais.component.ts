import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country, Currencies } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  pais!: Country[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.paisService.getPaisPorId(id).subscribe((pais) => {
        this.pais = pais;
        console.log(this.pais);
      });
    });

    // this.activatedRoute.params
    //   .pipe(
    //     switchMap(({ id }) => this.paisService.getPaisPorId(id)),
    //     tap(console.log)
    //   )
    //   .subscribe((pais) => {
    //     this.pais = pais;
    //   });
  }
}
