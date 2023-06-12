export const newCourse = async (courseData, id) => {
    const response = await fetch(`http://localhost:5000/courses/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('access-token')}`,
    },
    body: JSON.stringify(courseData),
  })
  const data = await response.json()
  return data
}


export const updateStatus = async (id, status) => {
  const response = await fetch(
    `http://localhost:5000/courses/status/${id}`,
    {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status }),
    }
  )
  const data = await response.json()
  return data
}

