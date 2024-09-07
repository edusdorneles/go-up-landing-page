import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ClassroomLessonsComponent } from "./classroom-lessons.component";

describe("ClassroomLessonsComponent", () => {
  let component: ClassroomLessonsComponent;
  let fixture: ComponentFixture<ClassroomLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassroomLessonsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ClassroomLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
