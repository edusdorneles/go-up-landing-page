import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GolfForCompanyComponent } from "./golf-for-company.component";

describe("GolfForCompanyComponent", () => {
  let component: GolfForCompanyComponent;
  let fixture: ComponentFixture<GolfForCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GolfForCompanyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GolfForCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
