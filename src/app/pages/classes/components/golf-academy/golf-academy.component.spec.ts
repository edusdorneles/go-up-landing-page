import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GolfAcademyComponent } from "./golf-academy.component";

describe("GolfAcademyComponent", () => {
  let component: GolfAcademyComponent;
  let fixture: ComponentFixture<GolfAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GolfAcademyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GolfAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
