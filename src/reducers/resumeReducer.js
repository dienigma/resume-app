const resumeReducerDefaultState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  location: "",
  profileOverview: "",
  highlights: [],
  education: [],
  experience: [],
  awards: [],
  skills: [],
  certifications: []
};

const resumeReducer = (state = resumeReducerDefaultState, action) => {
  switch (action.type) {
    case "EDIT_EDUCATION":
      return [...state.education, action.education];
    case "EDIT_PROFILE_OVERVIEW":
      const { profileOverview } = action.profileOverview;
      return { ...state, profileOverview };
    case "EDIT_EXPERIENCE":
      return [...state.experience, action.experience];
    case "EDIT_AWARDS":
      return [...state.awards, action.award];
    case "EDIT_SKILLS":
      return [...state.skills, action.skills];

    case "EDIT_CERTIFICATIONS":
      return [...state.certifications, action.certification];
    case "EDIT_USER_DETAILS":
      const userDetails = action.userDetails;
      return { ...state, userDetails };
    default:
      return state;
  }
};

export default resumeReducer;
