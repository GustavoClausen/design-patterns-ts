interface User {
  name: string;
  age: number;
}

export class MyDataBaseClassic {
  private static instace: MyDataBaseClassic | null = null;
  private users: User[] = []

  private constructor() {}

  public static getInstance(): MyDataBaseClassic {
    if (MyDataBaseClassic.instace === null) {
      MyDataBaseClassic.instace = new MyDataBaseClassic();
    }
    return MyDataBaseClassic.instace
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user)
    }
  }
}
