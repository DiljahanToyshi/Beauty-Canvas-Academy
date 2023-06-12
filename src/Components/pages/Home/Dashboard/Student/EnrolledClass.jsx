

const EnrolledClass = () => {
      const { user } = useContext(AuthContext);
    const [courses, setcourses] = useState([]);
    const navigate = useNavigate();

    const url = `http://localhost:5000/payments/${user?.email}`;
    useEffect(() => {
        fetch(url, {
            method: 'GET', 
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setcourses(data)
                }
                else{
                    // logout and then navigate
                    navigate('/');
                }
            })
    }, [url, navigate]);


    return (
        <div>
            <h2 className="text-5xl">Your courses: {courses.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default EnrolledClass;