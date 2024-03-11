/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `workouts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Description` on the `workouts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `workouts` DROP PRIMARY KEY,
    DROP COLUMN `Description`,
    ADD COLUMN `description` VARCHAR(191) NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);
