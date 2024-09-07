import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GroupFieldVisitComponent } from "./group-field-visit.component";

describe("GroupFieldVisitComponent", () => {
  let component: GroupFieldVisitComponent;
  let fixture: ComponentFixture<GroupFieldVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupFieldVisitComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupFieldVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
