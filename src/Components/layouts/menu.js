<ul className="menu p-4 w-80">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">Admin Home</NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageusers">Manage users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageclass">Manage Classes</NavLink>
              </li>
            </>
          ) 
          : isInstructor ? (
            <>
              <li>
                <NavLink to="/dashboard/addcourse"> Add a Course</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycourse">My Course</NavLink>
              </li>
            </>
          ) :
           (
            <>
              <li>
                <NavLink to="/dashboard/enrolledclasses">
                  My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymenthistory">
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/selectcourse">
                  My Selected Course
                </NavLink>
              </li>
            </>
          )} 
         

          <div className="divider"></div>
          <li>
            <NavLink to="/">Home</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/classes">Our Courses</NavLink>
          </li>
        </ul>