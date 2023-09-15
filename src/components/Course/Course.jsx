import { useEffect } from "react";
import "./Course.css";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { FaBookmark, FaDollarSign } from "react-icons/fa";

const Course = () => {
  const [allCourse, setAllCourse] = useState([]);
  const [selectCourse, setAllSelectCourse] = useState([]);
  const [remaining, setReamainig] = useState(20);
  const [totalCredit, setTotalCreadit] = useState(0);
  useEffect(() => {
    fetch("./course.json")
      .then((res) => res.json())
      .then((data) => setAllCourse(data));
  }, []);

  const handelSelectorCourse = (course) => {
    const isExist = selectCourse.find((item) => item.id == course.id);
    let count = course.Credit;
    if (isExist) {
      return alert("alredy enrolled");
    } else {
      selectCourse.forEach((item) => {
        count = count + item.Credit;
      });
      const totalremaining = 20 - count;
      if (count > 20) {
        return alert('your limit ses')
      }
      else {
        setTotalCreadit(count);
        setReamainig(totalremaining);
        //  console.log(count);
        setAllSelectCourse([...selectCourse, course]);
      }
    }
  };

  // console.log(allCourse);
  // console.log(selectCourse);

  return (
    <div className="container">
      <div className="course-container">
        <div className="card-container">
          {allCourse.map((course) => (
            <div key={course.id} className="card">
              <div className="card-img">
                <img className="photo" src={course.image} alt="" />
              </div>
              <h2 className="subject">{course.subject}</h2>

              <p className="titale">{course.titale}</p>

              <div className="creditPrice">
                <p>
                  Price : <FaDollarSign />{course.Price}
                </p>
                
                <p>
                  Credit : <FaBookmark></FaBookmark>
                  {course.Credit}hr
                </p>
              </div>
              <button
                onClick={() => handelSelectorCourse(course)}
                className="card-btn"
              >
                Select
              </button>
            </div>
          ))}
        </div>
        <div className="cart">
          <Cart
            selectCourse={selectCourse}
            remaining={remaining}
            totalCredit={totalCredit}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Course;
