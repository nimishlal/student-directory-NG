import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cardData: Student;
  private studentData: Student[] = [
    {
      fName: 'Nimish',
      lName: 'Lal',
      sName: 'Nimish Lal',
      nName: 'Nimish',
      hob: 'playing video games'
    },
    {
      fName: 'Deon',
      lName: 'Simmons Jr.',
      sName: 'Deon',
      nName: 'N/A',
      hob: 'Reading Comics'
    },
    {
      fName: 'Joseangel',
      lName: 'Pantoja',
      sName: 'Angel',
      nName: 'Angel',
      hob: 'Hiking'
    },
    {
      fName: 'Lourn',
      lName: 'Selga',
      sName: 'Lourn?',
      nName: 'Lrrrn',
      hob: 'Plastic Model Building'
    },
    {
      fName: 'Johnny',
      lName: 'Uribe',
      sName: 'JohnnyU',
      nName: 'Johnny',
      hob: 'Long walks on the beach'
    }
  ];
  constructor() { }
  getStudent(): Student[]{
    return this.studentData;
  }

  setCardData(person: Student){
    //save student data
    this.cardData = person;
  }

  getCardData():Student {
    //retrives student data for card
    return this.cardData;
  }

}
