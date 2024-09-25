import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String, ref: "userName", required: true },
  email: { type: String, ref: "email", required: true },
  password: { type: String, ref: "password", required: false },
  userImage: { type: String, ref: "userImage", required: false },
  image_public_id: { type: String, ref: "mage_public_id", required: false },

  descriptions: { type: String, ref: "descriptions", required: false },

  address: {
    villageOrTown: { type: String, ref: "villageOrTown", required: false },
    postOffice: { type: String, ref: "postOffice", required: false },
    thana: { type: String, ref: "thana", required: false },
    district: { type: String, ref: "district", required: false },
    postCode: { type: String, ref: "postCode", required: false },
    country: { type: String, ref: "country", required: false },
  },
  educations: {
    ssc: {
      institution: { type: String, ref: "institution", required: false },
      result: { type: String, ref: "result", required: false },
      passingYear: { type: String, ref: "passingYear", required: false },
    },
    hsc: {
      institution: { type: String, ref: "institution", required: false },
      result: { type: String, ref: "result", required: false },
      passingYear: { type: String, ref: "passingYear", required: false },
    },
    ba: {
      institution: { type: String, ref: "institution", required: false },
      result: { type: String, ref: "result", required: false },
      passingYear: { type: String, ref: "passingYear", required: false },
    },
    ma: {
      institution: { type: String, ref: "institution", required: false },
      result: { type: String, ref: "result", required: false },
      passingYear: { type: String, ref: "passingYear", required: false },
    },
    another: {
      institution: { type: String, ref: "institution", required: false },
      result: { type: String, ref: "result", required: false },
      passingYear: { type: String, ref: "passingYear", required: false },
    },
  },

  contact: { type: String, ref: "contact", required: false },

  recentDate: {
    type: String,
    ref: "recentDate",
    required: false,
  },
  dateField: {
    type: Date,
    default: Date.now,
    required: false,
  },

  isAdmin: {
    type: Boolean,
    default: false,
    required: false,
  },
  isAdminVerified: {
    type: Boolean,
    default: false,
    required: false,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isToken: String,
  isTokenVerified: Date,
  isForgotPasswordToken: String,
  isForgotPasswordTokenVerified: Date,
});

export const UserSchemaStr =
  mongoose.models.users || mongoose.model("users", userSchema);

// products_Schema_start
const ProjectSchema = new mongoose.Schema({
  projectTitle: { type: String, ref: "title", required: false },
  projectImage: { type: String, ref: "projectImage", required: false },
  projectImagePublicId: {
    type: String,
    ref: "projectImagePublicId",
    required: false,
  },
  projectDescriptions: {
    type: String,
    ref: "projectDescriptions",
    required: false,
  },
  projectLink: { type: String, ref: "projectLink", required: false },
  category: { type: String, ref: "category", required: false },
  recentDate: { type: String, ref: "recentDate", required: false },
  likes: [],
  comments: [],
  dateField: {
    type: Date,
    default: Date.now,
    required: false,
  },
});

export const ProjectSchemaStr =
  mongoose.models.projects || mongoose.model("projects", ProjectSchema);
