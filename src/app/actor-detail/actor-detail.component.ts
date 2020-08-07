import { Component, OnInit } from '@angular/core';
import { ActorDetail } from '../actor';
import { ActivatedRoute } from '@angular/router'; 
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {

  actor: ActorDetail;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getActorDetail();
  }

  getActorDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getActorDetail(id)
      .subscribe((data: any) => this.actor = {
        id: data.id,
        name: data.name,
        birthday: data.birthday,
        place_of_birth: data.place_of_birth,
        biography: data.biography,
        profile_path: data.profile_path
      });
  }


}
