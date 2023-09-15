import PropTypes from "prop-types";

const Cart = ({ selectCourse, remaining, totalCredit }) => {
  return (
    <div>
      <h4 className="remaning">Credit Hour Remaining {remaining}</h4>
      <p className="border"></p>
      {selectCourse.map((course) => (
        <li className="subj" key={course.id}>{course.subject}</li>
      ))}
      <p className="border"></p>
      <h4 className="credit">Total Credit Hour : {totalCredit}</h4>
    </div>
  );
};

Cart.propTypes = {
  selectCourse: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      subject: PropTypes.string.isRequired,
    })
  ).isRequired,
  remaining: PropTypes.number.isRequired,
  totalCredit: PropTypes.number.isRequired,
};

export default Cart;
