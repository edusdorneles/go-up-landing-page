import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GolfAnywhereComponent } from "./golf-anywhere.component";

describe("GolfAnywhereComponent", () => {
  let component: GolfAnywhereComponent;
  let fixture: ComponentFixture<GolfAnywhereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GolfAnywhereComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GolfAnywhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
