//Soal - 01
// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
/* Answer
1. akan menampilkan objek dari fun1 dan fun2
2. tidak sama
3. karena pada code tersebut kita memakai this yang merepresentasikan kepemilikan data objek kepada fun1/fun2 */
const obj = {
    fun1: function() {
      console.log("fun1", this);
    },
    fun2: () => {
      console.log("fun2", this);
    }
  };
  
  obj.fun1();
  obj.fun2();

//Soal - 02
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
/*Answer
1. Encapsulation adalah cara untuk membungkus data variabel dan fungsi menjadi satu kesatuan, kita membutuhkannya untuk membatasi
hak akses pada properti yang dimiliki oleh suatu objek
2. Abstraction adalah cara untuk membiarkan dari sebuah method tidak memiliki isi , kita membutuhkannya untuk
mengatur kompleksitas method yang nantinya dapat dipakai kembali oleh class turunan
3. Inheritance adalah cara untuk menurunkan/mewariskan properti dan method dari parent class ke child class, kita membutuhkan
inheritance agar tidak mengulangi dalam penulisan code yang memiliki properti dan method yang sama
4. Polymorpishm adalah cara kita dapat membuat sebuah method child class yang didapat dari turunan parent class memiliki output berbeda,
kita membutuhkannya untuk mengubah method dari parent class sesuai dengan kebutuhan child class*/

//Soal - 03
class Phone {
    constructor(brand, storage, ram) {
        let _brandValue = brand;
        let _storageValue = storage;
        let _ramValue = ram;

        this.getBrandName = function() {
            return _brandValue;
        }

        this.setBrandName = function(setBrand) {
            _brandValue = setBrand;
        }

        this.printSpecification = function() {
            return console.log(`Ponsel ini memiliki storage: ${_storageValue} dan ram ${_ramValue}`);
        }

        this.setSpecification = function(setStorage, setRam) {
            _storageValue = setStorage;
            _ramValue = setRam;
        }
    }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();

//Soal - 04
class Student {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.courseOfferings = [];
    }
    
    takeNewCourse(course) {
        let haveCourse;
        this.courseOfferings.forEach(cO => {
            if (cO.subject == course.subject) haveCourse = true;
        })

        if (haveCourse != true) {
            console.log(`You already have the course ${course.subject} !`);
        }
        else {
            course.decreaseQuota();
            const newCourse = new CourseOffering(course.subject, course.quota, course.attendance)
            this.courseOfferings.push(newCourse);
        }

    }

    takeATest() {}

    courseAttendance() {}
  }
  
  class CourseOffering extends Course {
      constructor(course, grade, attendance){
          this.course = course;
          this.grade = grade;
          this.attendance = 0;
      }
  }
  
  class Course {
      constructor(subject, quota, attendance){
          this.subject = subject;
          this.quota = quota;
          this.attendance = attendance;
      }

      getSubject(){
          return this.subject;
      }

      getAttendance(){
          return this.attendance;
      }

      decreaseQuota(){
          this.quota -= 1;
      }
  }
  
  
  const biology = new Course("biology", 10, 3);
  const physics = new Course("physics", 10, 2);
  
  const johnWatson = new Student("john watson", "male");
  
  johnWatson.takeNewCourse(biology);
  johnWatson.takeNewCourse(physics);
  
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(biology);
  johnWatson.courseAttendance(physics);
  
  console.log(biology.quota);
  console.log(physics.quota);
  
  johnWatson.takeATest(biology);
  johnWatson.takeATest(physics);
  
  console.log(johnWatson.courseOfferings);