import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AcademyBenefitsComponent } from "./academy-benefits.component";

describe("AcademyBenefitsComponent", () => {
  let component: AcademyBenefitsComponent;
  let fixture: ComponentFixture<AcademyBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademyBenefitsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AcademyBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
