export const updateCourse  = async (courseData, id) => {
    const response = await fetch(`https://assignment-12-server-delta-six.vercel.app/courses/${id}`, {
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
    `https://assignment-12-server-delta-six.vercel.app/courses/status/${id}`,
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

