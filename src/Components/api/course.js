export const newCourse = async (courseData, id) => {
    const response = await fetch(`http://localhost:5000/courses/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('access-token')}`,
    },
    body: JSON.stringify(courseData),
  })}