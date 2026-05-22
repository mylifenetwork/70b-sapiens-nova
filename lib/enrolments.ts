import { z } from 'zod';

function normalizeText(value: unknown): unknown {
  if (typeof value !== 'string') {
    return value;
  }
  return value.trim();
}

function normalizeEmail(value: unknown): unknown {
  if (typeof value !== 'string') {
    return value;
  }

  return value
    .trim()
    .replace(/＠/g, '@')
    .replace(/[。．｡]/g, '.')
    .replace(/\s+/g, '');
}

export const enrolmentSubmissionSchema = z.object({
  programme: z.preprocess(normalizeText, z.string().min(1)),
  studentFirstName: z.preprocess(normalizeText, z.string().min(1).max(100)),
  studentLastName: z.preprocess(normalizeText, z.string().min(1).max(100)),
  studentAge: z
    .string()
    .min(1)
    .regex(/^\d+$/, 'studentAge must be numeric')
    .transform((val) => Number.parseInt(val, 10))
    .refine((val) => val >= 5 && val <= 30, 'studentAge out of range'),
  studentGender: z.preprocess(normalizeText, z.string().min(1).max(50)),
  studentSchool: z.preprocess(normalizeText, z.string().min(1).max(255)),
  studentCountry: z.preprocess(normalizeText, z.string().min(1).max(100)),
  contactFirstName: z.preprocess(normalizeText, z.string().min(1).max(100)),
  contactLastName: z.preprocess(normalizeText, z.string().min(1).max(100)),
  contactEmail: z.preprocess(
    normalizeEmail,
    z
      .string()
      .min(1, 'Email is required')
      .max(255)
      .regex(/^[^\s@]+@[^\s@]+$/, 'Please enter a valid email format'),
  ),
  contactRelationship: z.preprocess(normalizeText, z.string().min(1).max(100)),
  contactPhone: z.preprocess(normalizeText, z.string().max(50).optional().default('')),
});

export type EnrolmentSubmission = z.infer<typeof enrolmentSubmissionSchema>;

export type EnrolmentInsertRow = {
  programme: string;
  stuFirstName: string;
  stuLastName: string;
  stuAge: number;
  stuGender: string;
  school: string;
  countryOfResidence: string;
  parFitstName: string;
  parLastName: string;
  parEmail: string;
  relationshipToStudent: string;
  number: string | null;
};

function getSafeIdentifier(input: string, fallback: string): string {
  const raw = input.trim();
  if (!raw) {
    return fallback;
  }
  if (!/^[A-Za-z0-9_]+$/.test(raw)) {
    throw new Error(`Invalid SQL identifier: ${raw}`);
  }
  return raw;
}

export function getEnrolmentTargetTable(): string {
  const configuredSchema = process.env.DB_SCHEMA || process.env.DB_NAME || '';
  const schema = getSafeIdentifier(configuredSchema, 'sapiens_nova');
  const table = getSafeIdentifier(process.env.DB_ENROLMENT_TABLE || '', 'enrolment_submissions');
  return `\`${schema}\`.\`${table}\``;
}

export function toEnrolmentInsertRow(input: unknown): EnrolmentInsertRow {
  const parsed = enrolmentSubmissionSchema.parse(input);

  return {
    programme: parsed.programme,
    stuFirstName: parsed.studentFirstName,
    stuLastName: parsed.studentLastName,
    stuAge: parsed.studentAge,
    stuGender: parsed.studentGender,
    school: parsed.studentSchool,
    countryOfResidence: parsed.studentCountry,
    parFitstName: parsed.contactFirstName,
    parLastName: parsed.contactLastName,
    parEmail: parsed.contactEmail,
    relationshipToStudent: parsed.contactRelationship,
    number: parsed.contactPhone.trim() ? parsed.contactPhone.trim() : null,
  };
}

export function getEnrolmentInsertSql(): string {
  return `
INSERT INTO ${getEnrolmentTargetTable()} (
  Programme,
  Stu_First_name,
  Stu_last_name,
  Stu_age,
  Stu_gender,
  school,
  Country_of_Residence,
  Par_fitst_name,
  Par_last_name,
  Par_email,
  Relationship_to_Student,
  number
) VALUES (
  ?,
  ?,
  ?,
  ?,
  ?,
  ?,
  ?,
  ?,
  ?,
  ?,
  ?,
  ?
)
`;
}

export function toEnrolmentInsertValues(row: EnrolmentInsertRow): Array<string | number | null> {
  return [
    row.programme,
    row.stuFirstName,
    row.stuLastName,
    row.stuAge,
    row.stuGender,
    row.school,
    row.countryOfResidence,
    row.parFitstName,
    row.parLastName,
    row.parEmail,
    row.relationshipToStudent,
    row.number,
  ];
}
