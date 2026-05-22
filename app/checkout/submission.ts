export type EnrollmentSubmission = {
  programme: string;
  studentFirstName: string;
  studentLastName: string;
  studentAge: string;
  studentGender: string;
  studentSchool: string;
  studentCountry: string;
  contactFirstName: string;
  contactLastName: string;
  contactEmail: string;
  contactRelationship: string;
  contactPhone: string;
};

type FormShape = {
  programme: string;
  studentFirstName: string;
  studentLastName: string;
  studentAge: string;
  studentGender: string;
  studentSchool: string;
  studentCountry: string;
  contactFirstName: string;
  contactLastName: string;
  contactEmail: string;
  contactRelationship: string;
  contactPhone: string;
};

export function toEnrollmentSubmission(formData: FormShape): EnrollmentSubmission {
  return {
    ...formData,
  };
}

export function buildEnrollmentMailBody(data: EnrollmentSubmission): string {
  return [
    `Programme: ${data.programme}`,
    '',
    `Student: ${data.studentFirstName} ${data.studentLastName}, Age ${data.studentAge}`,
    `Gender: ${data.studentGender}`,
    `School: ${data.studentSchool}`,
    `Country: ${data.studentCountry}`,
    '',
    `Contact: ${data.contactFirstName} ${data.contactLastName} (${data.contactRelationship})`,
    `Email: ${data.contactEmail}`,
    `Phone: ${data.contactPhone || 'N/A'}`,
  ].join('\n');
}
