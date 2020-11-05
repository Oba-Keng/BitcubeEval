class Facility {
  constructor(
    forenames,
    surname,
    email,
    dateOfBirth,
    degree,
    firstname,
    firstname2,
    degreeDuration,
    courses,
    lecturer,
    courseDuration,
    course
  ) {
    this.forenames = forenames;
    this.surname = surname;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    this.degree = degree;
    this.firstname = firstname;
    this.firstname2 = firstname2;
    this.courses = courses;
    this.lecturer = lecturer;
    this.courseDuration = courseDuration;
    this.course = course;
  }

  addLecturer() {
    this.forenames = window.prompt(
      "enter your Forenames,seperate names by space "
    );

    document.getElementById("lecturer-forenames").innerHTML =
      "Forename(s): " + this.forenames;

    this.surname = window.prompt("enter Surname ");

    document.getElementById("lecturer-surname").innerHTML =
      "Surname: " + this.surname;

    this.email = window.prompt("enter email address ");

    document.getElementById("lecturer-email").innerHTML =
      "E-mail: " + this.email;

    this.dateOfBirth = window.prompt(
      "enter date of birth using this format dd/mm/yy "
    );

    document.getElementById("lecturer-dob").innerHTML =
      "Date-of-birth: " + this.dateOfBirth;

    this.degree = window.prompt(
      "list degree or degrees lecturer is responsible for "
    );

    document.getElementById("lecturer-degree").innerHTML =
      "Degree(s): " + this.degree;

    document.getElementById("lecturer-fullname").innerHTML =
      "Full-name: " + this.forenames + " " + this.surname;

    for (let i = 0; i < this.forenames.length; i++) {
      if (this.forenames[i] == 0) {
        break;
      }

      this.firstname += this.forenames[i];
      document.getElementById("lecturer-firstname").innerHTML =
        "First-name: " + this.firstname;
    }
  }

  addStudents() {
    this.forenames = window.prompt(
      "enter your Forenames,seperate names by space "
    );

    document.getElementById("forenames").innerHTML =
      "Forename(s): " + this.forenames;

    this.surname = window.prompt("enter Surname ");

    document.getElementById("surname").innerHTML = "Surname: " + this.surname;

    this.email = window.prompt("enter email address ");

    document.getElementById("email").innerHTML = "E-mail: " + this.email;

    this.dateOfBirth = window.prompt(
      "enter date of birth using this format dd/mm/yy "
    );

    document.getElementById("dob").innerHTML =
      "Date of Birth: " + this.dateOfBirth;

    document.getElementById("fullname").innerHTML =
      "Full-Name: " + this.forenames + " " + this.surname;

    for (let i = 0; i < this.forenames.length; i++) {
      if (this.forenames[i] == 0) {
        break;
      }

      this.firstname2 += this.forenames[i];
      console.log(this.firstname2);

      document.getElementById("firstname").innerHTML =
        "First-name: " + this.firstname2;
    }
  }

  addDegree() {
    this.degree = window.prompt("enter degree name ");

    document.getElementById("qualification-degree").innerHTML =
      "Degree: " + this.degree;

    this.degreeDuration = window.prompt("enter degree duration in years ");

    document.getElementById("qualification-duration").innerHTML =
      "Duration: " + this.degreeDuration + " years";

    this.courses = window.prompt(
      "list one or more courses that are part of degree,seperate with commas "
    );

    document.getElementById("qualification-courses").innerHTML =
      "Courses: " + this.courses;

    this.lecturer = window.prompt("enter name of lecturer");

    document.getElementById("qualification-lecturer").innerHTML =
      "Lecturer: " + this.lecturer;
  }

  addCourse() {
    this.courses = window.prompt(
      "list one or more courses that are part of degree,seperate with commas "
    );

    document.getElementById("Course-name").innerHTML =
      "Course-name: " + this.courses;

    this.courseDuration = window.prompt("course duration ");

    document.getElementById("Course-duration").innerHTML =
      "Course-Duration: " + this.courseDuration + " years";

    this.course = window.prompt("Course: ");

    document.getElementById("Course").innerHTML = "Course: " + this.course;
  }

  getDegreeLink() {
    let a = document.createElement("a");

    let link = document.createTextNode("BSC Information Technology");

    a.appendChild(link);

    var loc = "https://www.google.com/?xyz=";
    document.write('<a href="' + loc + '"></a>');

    document.body.appendChild(a);
  }
}
document.getElementById("addLecturer").addEventListener("click", addLecturer);

document.getElementById("addStudents").addEventListener("click", addStudents);

document.getElementById("addDegree").addEventListener("click", addDegree);

document.getElementById("addCourse").addEventListener("click", addCourse);

document
  .getElementById("getDegreeLink")
  .addEventListener("click", getDegreeLink);

let Access = new Facility();
