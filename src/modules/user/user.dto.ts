export type userDTO = {
  id?: String;
  name: String;
  email: String;
  password: String;
  age: Number;
  weight: Number;
  Height: Number;
  created_at?: Date;
  updated_at?: Date;
};

// id String @id @default(uuid())
// name String
// email String @unique
// password String
// age Int
// weight Float
// Height Float
// created_at DateTime @default(now())
// updated_at DateTime @updatedAt

// workout_routines WorkoutRoutine[]
// @@map("users")
