/**
 * Format a date string into a readable format.
 */
export const formatDate = (dateString) => {
  if (!dateString) return '';
  return dateString;
};

/**
 * Filter projects based on a tag.
 */
export const filterProjects = (projects, tag) => {
  if (!tag) return projects;
  return projects.filter(project => project.tags.includes(tag));
};
