export enum UserRoles {
  ADMIN = 'ADMIN',
  LEAD_MARKETING = 'LEAD_MARKETING',
  EMPLOYEE_MARKETING = 'EMPLOYEE_MARKETING',
  BASIC_USER = 'BASIC_USER',
  COUNSELOR = 'COUNSELOR',
  REGISTAR = 'REGISTAR',
  HOD = 'HOD',
  INSTRUCTOR = 'INSTRUCTOR'
}

export enum COLLECTION_NAMES {
  USER = 'User',
  VERIFY_OTP = 'VerifyOtp',
  ENQUIRY = 'Enquiry',
  ENQUIRY_DRAFT = 'EnquiryDraft',
  ENQUIRY_ID_META_DATA = 'EnquiryIdMetaData',
  STUDENT_FEE = 'studentFee',
  STUDENT_FEE_DRAFT = 'studentFeeDraft',
  DEPARTMENT_COURSE = 'deptandcourse',
  LEAD = 'Lead',
  SPREADSHEET_META_DATA = 'spreadSheetMetaData',
  YELLOW_LEAD = 'YellowLead',
  COURSE_OTHER_FEES = 'CourseAndOtherFees',
  STUDENT = 'Student',
  DEPARTMENT_META_DATA = 'DepartmentMetaData',
  COURSE = 'Course',
  DROP_DOWN_META_DATA = 'DropDownMetaData'
}


export enum RequestAction {
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
  PATCH = "PATCH",
}