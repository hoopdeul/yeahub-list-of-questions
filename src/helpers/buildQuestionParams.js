export const buildQuestionParams = (filters, search) => ({
  ...(filters.spec && { specializationId: filters.spec }),
  ...(filters.skills.length > 0 && {
    skills: filters.skills,
    skillFilterMode: "ANY"
  }),
  ...(filters.complexity.length > 0 && {
    complexity: filters.complexity
  }),
  ...(filters.rate.length > 0 && {
    rate: filters.rate
  }),
  ...(search.trim().length > 0 && {
    titleOrDescription: search.trim()
  })
});
