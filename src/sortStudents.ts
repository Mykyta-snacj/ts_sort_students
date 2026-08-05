
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc'| 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const result = [...students];

  function avg(grades: number[]): number {
    return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
      result.sort((a, b) => (order === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)));
      break;

    case SortType.Surname:
      result.sort((a, b) => (order === 'asc'
        ? a.surname.localeCompare(b.surname)
        : b.surname.localeCompare(a.surname)));
      break;

    case SortType.Age:
      result.sort((a, b) => (order === 'asc' ? a.age - b.age : b.age - a.age));
      break;

    case SortType.Married:
      result.sort((a, b) => (order === 'asc'
        ? Number(a.married) - Number(b.married)
        : Number(b.married) - Number(a.married)));
      break;

    case SortType.AverageGrade:
      result.sort((a, b) => (order === 'asc'
        ? avg(a.grades) - avg(b.grades)
        : avg(b.grades) - avg(a.grades)));
      break;

    default:
      return result;
  }

  return result;
}
