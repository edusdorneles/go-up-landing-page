import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ClubBenefitsComponent } from "./club-benefits.component";

describe("ClubBenefitsComponent", () => {
  let component: ClubBenefitsComponent;
  let fixture: ComponentFixture<ClubBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubBenefitsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ClubBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
