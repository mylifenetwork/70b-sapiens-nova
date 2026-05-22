-- Company-safe setup: no DROP, only create if missing.
-- Change `your_schema_name` and `enrolment_submissions` as needed.

CREATE DATABASE IF NOT EXISTS your_schema_name
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE your_schema_name;

CREATE TABLE IF NOT EXISTS enrolment_submissions (
  `Programme` VARCHAR(120) NOT NULL,
  `Stu_First_name` VARCHAR(100) NOT NULL,
  `Stu_last_name` VARCHAR(100) NOT NULL,
  `Stu_age` TINYINT UNSIGNED NOT NULL,
  `Stu_gender` VARCHAR(50) NOT NULL,
  `school` VARCHAR(255) NOT NULL,
  `Country_of_Residence` VARCHAR(120) NOT NULL,
  `Par_fitst_name` VARCHAR(100) NOT NULL,
  `Par_last_name` VARCHAR(100) NOT NULL,
  `Par_email` VARCHAR(255) NOT NULL,
  `Relationship_to_Student` VARCHAR(100) NOT NULL,
  `number` VARCHAR(50) NULL
);
