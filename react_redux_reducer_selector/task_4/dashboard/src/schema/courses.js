// TASK 4 - REDUCERS: schema/courses.js
import { schema, normalize } from 'normalizr';

// Define a course schema
const course = new schema.Entity('courses', {}, {
  processStrategy: (entity) => ({
      ...entity,
      isSelected: false
  })
});

// Define an array schema for a list of courses
const courseList = [course];

// Function to normalize the course data
export const coursesNormalizer = (data) => normalize(data, courseList).entities.courses;
